import {MutableRefObject, useEffect, useMemo, useRef, useState} from "react";
import './RenderMaterial'
import * as THREE from "three";
import {Canvas, useFrame, useLoader, useThree} from "@react-three/fiber";
import {GPUComputationRenderer} from "three/examples/jsm/misc/GPUComputationRenderer";
import {
  getSphereTexture,
  getStartingTexture,
  getVelocityTexture
} from "@/components/hero-section/particles/gpgpu/getDataTexture";

// @ts-ignore
import simFragmentPosition from "!!raw-loader!./shaders/simFragmentPosition.glsl";

// @ts-ignore
import simFragmentVelocity from "!!raw-loader!./shaders/simFragmentVelocity.glsl";

// @ts-ignore
import vertexShader from "!!raw-loader!./vertexShader.glsl";
// @ts-ignore
import fragmentShader from "!!raw-loader!./fragmentShader.glsl";
import {useAtom} from "jotai";
import {themeAtom} from "@/atoms/ui";

function Gpgpu() {
  const [theme,] = useAtom(themeAtom)
  const fileUrl = '/images/circle.png'
  const imgTex = useLoader(THREE.TextureLoader, fileUrl);

  const COUNT = useMemo(() => 100, [])
  const renderMat: MutableRefObject<any> = useRef()
  const SEPARATION = useMemo(() => 3, [])

  const pointsRef: MutableRefObject<any> = useRef()

  const followMouse = useRef()

  const {gl} = useThree()


  const gpuCompute = new GPUComputationRenderer(200, 200, gl);

  const pointsOnSphere = useMemo(() => getSphereTexture(COUNT, 2, 2), [])
  const startPoints = useMemo(() => getStartingTexture(COUNT), [])

  const positionVariable = gpuCompute.addVariable('uCurrentPosition', simFragmentPosition, startPoints)
  const velocityVariable = gpuCompute.addVariable('uCurrentVelocity', simFragmentVelocity, getVelocityTexture(COUNT))

  gpuCompute.setVariableDependencies(positionVariable, [positionVariable, velocityVariable])
  gpuCompute.setVariableDependencies(velocityVariable, [positionVariable, velocityVariable])

  const positionUniforms = positionVariable.material.uniforms
  const velocityUniforms = velocityVariable.material.uniforms

  gpuCompute.init()

  let points = useMemo(() => {
    let output = []
    for (let xi = 0; xi < COUNT; xi++) {
      for (let zi = 0; zi < COUNT; zi++) {
        output.push(
          (xi - COUNT / 2) * SEPARATION,
          (zi - COUNT / 2) * SEPARATION,
          0,
        )
      }
    }
    return new Float32Array(output)
  }, [COUNT, SEPARATION])

  let reference = useMemo(() => {
    let output = []
    for (let xi = 0; xi < COUNT; xi++) {
      for (let zi = 0; zi < COUNT; zi++) {
        output.push(
          xi / (COUNT - 1),
          zi / (COUNT - 1)
        )
      }
    }
    return new Float32Array(output)
  }, [COUNT])

  const uniforms = useMemo(() => ({
    uPosition: {value: startPoints},
    uCurrentPosition: {value: startPoints},
    uOriginalPosition: {value: pointsOnSphere},
    uMouse: {value: new THREE.Vector3(0, 0, 0)},
    u_ColorA: {value: new THREE.Color("#181818")},
    u_ColorB: {value: new THREE.Color("#ad1414")},
    u_Texture: {value: imgTex},
  }), [])

  velocityUniforms.uMouse = {value: uniforms.uMouse.value}
  positionUniforms.uOriginalPosition = {value: uniforms.uOriginalPosition.value}
  velocityUniforms.uOriginalPosition = {value: uniforms.uOriginalPosition.value}

  useFrame(({pointer, viewport}) => {
    // followMouse.current.position.x = mouse.x * viewport.width / 2
    // followMouse.current.position.y = mouse.y * viewport.height / 2
    // velocityUniforms.uMouse.value.x = pointer.x * viewport.width / 2
    // velocityUniforms.uMouse.value.y = pointer.y * viewport.height / 2
    uniforms.uMouse.value.x = pointer.x * viewport.width / 2
    uniforms.uMouse.value.y = pointer.y * viewport.height / 2
  })

  useFrame(({gl}) => {
    if (!renderMat.current) return;
    gpuCompute.compute()
    renderMat.current.uniforms.uPosition.value = gpuCompute.getCurrentRenderTarget(positionVariable).texture;
    // renderMat.current.uniforms.uColor.value = uniforms.u_ColorA.value
  })

  useEffect(() => {
    if (theme === "light") {
      uniforms.u_ColorA.value = new THREE.Color("#181818")
      uniforms.u_ColorB.value = new THREE.Color("#ad1414")
    } else {
      uniforms.u_ColorA.value = new THREE.Color("#FFE486")
      uniforms.u_ColorB.value = new THREE.Color("#FEB3D9")
    }
  }, [theme])


  return (
    <>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={points.length / 3}
            array={points}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-reference"
            count={reference.length / 2}
            array={reference}
            itemSize={2}
          />
        </bufferGeometry>
        {/*@ts-ignore*/}
        <renderMaterial
          transparent={true}
          blending={THREE.AdditiveBlending}
          ref={renderMat}
          attach="material"
          fragmentShader={fragmentShader}
          vertexShader={vertexShader}
          uniforms={uniforms}
        />
      </points>
    </>
  )
}


export default function GpgpuScene() {
  return (
    <Canvas
      resize={{scroll: false}}
      gl={{antialias: false}}
    >
      {/*<gridHelper args={[200, 50]} />*/}
      <Gpgpu/>
      {/*<OrbitControls/>*/}
    </Canvas>
  )
}
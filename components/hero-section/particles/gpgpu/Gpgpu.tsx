import {
  getSphereTexture,
  getStartingTexture,
  getVelocityTexture
} from "@/components/hero-section/particles/gpgpu/getDataTexture";

import './RenderMaterial'

import {GPUComputationRenderer} from "three/examples/jsm/misc/GPUComputationRenderer";
// @ts-ignore
import simFragmentPosition from "!!raw-loader!./shaders/simFragmentPosition.glsl";
// @ts-ignore
import simFragmentVelocity from "!!raw-loader!./shaders/simFragmentVelocity.glsl";
import {MutableRefObject, useEffect, useMemo, useRef, useState} from "react";
import {Canvas, useFrame, useLoader, useThree} from "@react-three/fiber";
// @ts-ignore
import fragmentShader from "!!raw-loader!./fragmentShader.glsl";
// @ts-ignore
import vertexShader from "!!raw-loader!./vertexShader.glsl";
import {themeAtom} from "@/atoms/ui";
import * as THREE from "three";
import {useAtom} from "jotai";

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


  const gpuCompute = new GPUComputationRenderer(100, 100, gl);

  const pointsOnSphere = useMemo(() => getSphereTexture(COUNT, 2, 2), [])
  // const startPoints = useMemo(() => getStartingTexture(COUNT), [])
  const startPoints = pointsOnSphere

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
    u_ColorA: {value: new THREE.Color("#181818")},
    u_ColorB: {value: new THREE.Color("#ad1414")},
    u_Texture: {value: imgTex},
    uCurrentPosition: {value: startPoints},
    uMouse: {value: new THREE.Vector3(0, 0, 0)},
    uOriginalPosition: {value: pointsOnSphere},
    uPosition: {value: startPoints},
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
  }, [theme, uniforms.u_ColorA, uniforms.u_ColorB])


  return (
    <>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            itemSize={3}
            array={points}
            count={points.length / 3}
            attach="attributes-position"
          />
          <bufferAttribute
            itemSize={2}
            array={reference}
            count={reference.length / 2}
            attach="attributes-reference"
          />
        </bufferGeometry>
        {/*@ts-ignore*/}
        <renderMaterial
          ref={renderMat}
          attach="material"
          transparent={true}
          uniforms={uniforms}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </>
  )
}


export default function GpgpuScene() {
  return (
    <Canvas
      gl={{antialias: false}}
      resize={{scroll: false}}
    >
      {/*<gridHelper args={[200, 50]} />*/}
      <Gpgpu/>
      {/*<OrbitControls/>*/}
    </Canvas>
  )
}
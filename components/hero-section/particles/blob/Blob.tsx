import {MutableRefObject, useMemo, useRef} from "react";
import {Canvas, useFrame} from "@react-three/fiber";
import {MathUtils} from "three";
import {OrbitControls} from "@react-three/drei";
import vertexShader from "!!raw-loader!./vertexShader.glsl";
import fragmentShader from "!!raw-loader!./fragmentShader.glsl";


function Blob() {
  const mesh: MutableRefObject<any> = useRef()
  const hover = useRef(false)

  const uniforms = useMemo(
    () => ({
      u_intensity: {
        value: 0.3,
      },
      u_time: {
        value: 0.0
      }
    }), []
  );

  useFrame(({clock}) => {
    mesh.current.material.uniforms.u_time.value = 0.4 * clock.getElapsedTime();

    mesh.current.material.uniforms.u_intensity.value = MathUtils.lerp(
      mesh.current.material.uniforms.u_intensity.value,
      hover.current ? 0.85 : 0.15,
      0.02
    )

  })

  return (
    <mesh
      ref={mesh}
      position={[0, 0, 0]}
      scale={1.5}
      onPointerOver={() => (hover.current = true)}
      onPointerOut={() => (hover.current = false)}
    >
      <icosahedronGeometry args={[2, 20]}/>
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
        wireframe={false}
      />
    </mesh>
  )
}

export function Scene() {
  return (
    <Canvas>
      <Blob/>
      <axesHelper/>
      <OrbitControls/>
    </Canvas>
  )
}
import {useCallback, useEffect, useMemo, useRef} from "react";
import {Color, Vector2} from "three";
import {Canvas, useFrame} from "@react-three/fiber";

import vertexShader from "!!raw-loader!./vertexShader.glsl";
import fragmentShader from "!!raw-loader!./fragmentShader.glsl";

function Gradient() {
  const mesh = useRef();
  const mousePosition = useRef({x: 0, y: 0})
  const updateMousePosition = useCallback((ev: MouseEvent) => {
    mousePosition.current = {x: ev.clientX, y: ev.clientY}
  }, [])

  const uniforms = useMemo(
    () => ({
      u_time: {
        value: 0.0,
      },
      u_mouse: {value: new Vector2(0, 0)},
      u_bg: {
        value: new Color("#A1A3F7")
      },
      u_colorA: {value: new Color("#9FBAF9")},
      u_colorB: {value: new Color("#FEB3D9")},
    }), [])

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition, false)
    return () => window.removeEventListener("mousemove", updateMousePosition, false)
  }, [updateMousePosition])


  useFrame(({clock}) => {
    mesh.current.material.uniforms.u_time.value = clock.getElapsedTime()
    mesh.current.material.uniforms.u_mouse.value = new Vector2(
      mousePosition.current.x,
      mousePosition.current.y
    );
  })



  return (
    <mesh ref={mesh} position={[0,0,0]} scale={1.5}>
      <planeGeometry args={[1,1,32,32]}/>
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
        wireframe={false}
      />
    </mesh>
  )
}

export function GradientScene() {
  return (
    <Canvas camera={{position: [0.0, 0.0, 1.5]}}>
      <Gradient/>
    </Canvas>
  )
}
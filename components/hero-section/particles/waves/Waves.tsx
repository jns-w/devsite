import {MutableRefObject, useMemo, useRef} from "react";
import {Canvas, useFrame} from "@react-three/fiber";
import {Color, Mesh} from "three";
import vertexShader from "!!raw-loader!./vertexShader.glsl";
import fragmentShader from "!!raw-loader!./fragmentShader.glsl";

function Waves() {
  const mesh = useRef<Mesh>();

  const uniforms = useMemo(
    () => ({
      u_time: {
        value: 0.0,
      },
      u_colorA: {value: new Color("#FFE486")},
      u_colorB: {value: new Color("#FEB3D9")},
    }), []
  )

  useFrame((state, delta) => {
    if (!mesh.current) return;
    mesh.current.material.uniforms.u_time.value += delta;
  });


  return (
    <mesh ref={mesh} position={[0, -0.3, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={3}>
      <planeGeometry
        args={[1, 1, 4, 4]}
      />
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
        wireframe={true}
      />
    </mesh>
  );

}


export function WavesScene() {
  return (
    <Canvas camera={{position: [1.0, 0, 2.0]}}>
      <Waves/>
    </Canvas>
  )
}
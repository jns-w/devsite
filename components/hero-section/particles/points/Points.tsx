import * as THREE from 'three';
import {Canvas, useLoader} from '@react-three/fiber';
import {useMemo, useRef} from 'react';
import {OrbitControls} from "@react-three/drei";



function Points() {
  const fileUrl = '/images/circle.png'
  const imgTex = useLoader(THREE.TextureLoader, fileUrl);

  const bufferRef = useRef()

  const count = 50
  const sep = 3

  let positions = useMemo(() => {
    let positions = []
    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        positions.push(
          (xi - count / 2) * sep,
          0,
          (zi - count / 2) * sep
        )
      }
    }
    return new Float32Array(positions)
  }, [count, sep])


  return (
    <points>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          ref={bufferRef}
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        attach="material"
        map={imgTex}
        color={0x00AAFF}
        size={0.5}
        sizeAttenuation
        transparent={false}
        alphaTest={0.5}
        depthWrite={false}
        opacity={.9}
      />
    </points>
  );
}

export function PointsScene() {
  return (
    <Canvas camera={{position: [0,70,0], fov: 75}}>
      <Points/>
      {/*<OrbitControls/>*/}
    </Canvas>
  );
}


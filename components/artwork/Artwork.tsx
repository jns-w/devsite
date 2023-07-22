"use client"
import * as THREE from "three";
import {Canvas, useFrame, useThree} from "@react-three/fiber";
import {Suspense, useRef, useState} from "react";
import {Environment, useGLTF} from "@react-three/drei";
import {DepthOfField, EffectComposer} from "@react-three/postprocessing";

function Banana({ z }) {
  const ref = useRef();
  const { nodes, materials } = useGLTF("/banana-v1-transformed.glb");
  const { viewport, camera } = useThree();
  const { width, height } = viewport.getCurrentViewport(camera, [0, 0, z]);

  const [tr] = useState({
    pX: THREE.MathUtils.randFloatSpread(2),
    pY: THREE.MathUtils.randFloatSpread(height),
    rX: Math.random() * Math.PI, // randomises to full 360deg
    rY: Math.random() * Math.PI,
    rZ: Math.random() * Math.PI,
  });
  useFrame((state) => {
    ref.current.rotation.set(
      (tr.rX += 0.002),
      (tr.rY += 0.0015),
      (tr.rZ += 0.003)
    );
    ref.current.position.set(tr.pX * width, (tr.pY += 0.025), z);
    if (tr.pY > height * 1.2) tr.pY = -height * 1.2;
  });

  return (
    <mesh
      ref={ref}
      geometry={nodes.Banana.geometry}
      material={materials.Skin}
      material-emissive="orange"
    />
  );
}

useGLTF.preload("/banana-v1-transformed.glb");

export function Artwork({ count = 20, depth = 80 }) {
  return (
    <Canvas gl={{ alpha: true, antialias: true }} camera={{ near: 0.01, far: 110, fov: 30 }}>
      {" "}
      {/* default FOV is 75 */}
      {/*<color attach="background" args={["#fff"]} />*/}
      <Suspense fallback={null}>
        <spotLight position={[10, 10, 10]} intensity={1} />
        {Array.from({ length: count }, (_, i) => (
          <Banana key={i} z={-(i / count) * depth - 7} />
        ))}{" "}
        {/* this spaces every el out along the depth. -7 pushes all the els backwards */}
        <Environment preset="sunset" />
        <EffectComposer>
          <DepthOfField
            target={[0, 0, 70]}
            focalLength={0.5}
            bokehScale={5}
            height={700}
          />
        </EffectComposer>
      </Suspense>
    </Canvas>
  );
}
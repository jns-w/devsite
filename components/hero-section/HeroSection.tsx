"use client"
import styles from './hero-section.module.scss';
import {archivo} from "@/styles/fonts";
import {motion} from "framer-motion";
import {lazy, Suspense, useRef} from "react";
import GpgpuScene from "@/components/hero-section/particles/gpgpu/Gpgpu";

export function HeroSection() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Artwork/>
        <BackgroundArt/>
      </div>
    </div>
  )
}

function Artwork() {
  const ref = useRef(null)

  return (
    <div className={styles.artworkContainer} ref={ref}>
      <motion.div
        className={styles.heroTextContainer}
        id="Hero"
      >
        <h1 className={`
        ${archivo.className} 
        ${styles.heroText}`}>
          Hi I&#39;m Jonas and I&#39;m a
          <br/>
          <p>Full Stack Software Developer.</p>
        </h1>
      </motion.div>
    </div>
  )
}


function BackgroundArt() {
  return (
    <div className={styles.backdropWrapper}>
      {/*<Scene/>*/}
      {/*<GradientScene/>*/}
      {/*<WavesScene/>*/}
      {/*<PointsScene/>*/}
        <GpgpuScene/>
      {/*<AevumCircle/>*/}
    </div>
  )
}


// function MovingPlane() {
//   const mesh = useRef()
//
//   const uniforms = useMemo(
//     () => ({
//       u_time: {
//         value: 0.0,
//       },
//       u_colorA: {value: new Color("#FFE486")},
//       u_colorB: { value: new Color("#FEB3D9") },
//     }),[])
//
//   useFrame(({clock}) => {
//     mesh.current.material.uniforms.u_time.value = clock.getElapsedTime()
//   })
//
//   return (
//     <mesh ref={mesh} position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={3}>
//       <planeGeometry args={[1, 1, 16, 16]} />
//       <shaderMaterial
//         fragmentShader={fragmentShader}
//         vertexShader={vertexShader}
//         uniforms={uniforms}
//         wireframe={false}
//       />
//     </mesh>
//   );
// }

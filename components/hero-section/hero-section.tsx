"use client"
import GpgpuScene from "@/components/hero-section/particles/gpgpu/Gpgpu"
import { archivo } from "@/styles/fonts"
import { motion } from "framer-motion"
import { useRef } from "react"

import styles from "./hero-section.module.scss"

export function HeroSection() {
  return (
    <div className={styles.container}>
      <Artwork />
      <BackgroundArt />
    </div>
  )
}

function Artwork() {
  const ref = useRef(null)

  return (
    <div ref={ref} className={styles.artworkContainer}>
      <motion.div
        id="Hero"
        className={styles.heroTextContainer}
      >
        <h1 className={`
        ${archivo.className} 
        ${styles.heroText}`}>
          Hi I&#39;m Jonas and I&#39;m a
          <br />
          <p>Full Stack <span> Software Developer.</span></p>
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
      <GpgpuScene />
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

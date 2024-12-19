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
      <GpgpuScene />
    </div>
  )
}

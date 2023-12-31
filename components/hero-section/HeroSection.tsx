"use client"
import styles from './hero-section.module.scss';
import {archivo} from "@/styles/fonts";
import {motion} from "framer-motion";
import {Canvas} from "@react-three/fiber";
import {Leva} from "leva";
import Room from "@/components/hero-section/Room";
import {useEffect, useRef} from "react";

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
      >
        <h1 className={`${archivo.className} ${styles.heroText}`}>
          Hi I&#39;m Jonas and I&#39;m a
          <br/>
          <span>Junior Software Developer.</span>
        </h1>
      </motion.div>
      {/*<Canvas*/}
      {/*  camera={{*/}
      {/*    fov: 50,*/}
      {/*    position: [1, 1.3, -0.2],*/}
      {/*    zoom: 1,*/}
      {/*}}*/}
      {/*>*/}
      {/*  <Leva hidden={true}/>*/}
      {/*  <Room/>*/}
      {/*</Canvas>*/}
    </div>
  )
}

function BackgroundArt() {
  return (
    <div className={styles.backdropContainer}>
    </div>
  )
}
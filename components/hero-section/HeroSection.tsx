"use client"
import styles from './hero-section.module.scss';
import {archivo} from "@/styles/fonts";

export function HeroSection() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.artwork}></div>

        <div className={styles.artworkContainer}></div>
        <div className={styles.heroTextContainer}>
          <h1 className={`${archivo.className} ${styles.heroText}`}>
            Hi I&#39;m Jonas and I&#39;m a
            <br/>
            <span>Junior Software Developer.</span>
          </h1>
        </div>

        {/*<div className={styles.box}>*/}
        {/*  <HeroText/>*/}
        {/*  /!*<GlText/>*!/*/}
        {/*</div>*/}

      </div>
    </div>
  )
}
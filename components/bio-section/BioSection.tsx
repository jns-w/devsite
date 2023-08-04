"use client"

import styles from './bio-section.module.scss';
import {archivo} from "@/styles/fonts";
import {motion} from "framer-motion";

export function BioSection() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.bioGroup}>
          <div className={styles.photo}/>
          <div className={styles.bio}>
            <h2 className={archivo.className}>Jonas Wong</h2>
            <text className={archivo.className}>
              Based in Singapore 🇸🇬.
            </text>

            <div className={`${styles.buttonsGroup} ${archivo.className}`}>
              <motion.button>Contact me</motion.button>
              <motion.button>Portfolio</motion.button>
            </div>
          </div>
        </div>


        <div className={styles.description}>
          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </div>
      </div>
    </div>
  )
}
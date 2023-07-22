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
              Based in Singapore 🇸🇬. Passionate about
            </text>
          </div>
        </div>
        <div className={`${styles.buttonsGroup} ${archivo.className}`}>
          <motion.button
            whileHover={{scale: 1.1}}
            transition={{type: "spring", stiffness: 600, damping: 20}}
          >Contact me
          </motion.button>
          <motion.button>Portfolio</motion.button>
        </div>
      </div>
    </div>
  )
}
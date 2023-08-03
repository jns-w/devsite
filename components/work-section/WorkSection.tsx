"use client"
import { useEffect } from 'react';
import styles from './work-section.module.scss';
import {motion} from "framer-motion";

export function WorkSection() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 id="Portfolio">Portfolio</h1>
        coding is a passion of mine and this is a collection of my projects. Have a look.


        <div className={styles.ProjectsGrid}>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>
    </div>
  )
}

function Card() {
  return (
    <motion.div
      className={styles.Card}
    >
    </motion.div>
  )
}
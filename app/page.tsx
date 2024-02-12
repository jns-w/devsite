"use client"
import styles from './page.module.scss'
import {BioSection, ContactSection, HeroSection, PortfolioSection} from "@/components";
import {useRef} from "react";
import {motion} from 'framer-motion';

export default function Home() {

  const bioRef = useRef(null)
  const portfolioRef = useRef(null)
  const contactRef = useRef(null)

  return (
    <motion.main
      id="Top"
      className={styles.main}
      initial={{opacity: 0}}
      animate={{
        opacity: 1,
        transition: {
          opacity: {
            duration: 0.2,
            ease: "easeIn"
          }
        }
      }}
    >
      <HeroSection/>
      <div ref={bioRef}/>
      <BioSection/>
      <div ref={portfolioRef}/>
      <PortfolioSection/>
      <div ref={contactRef}/>
      <ContactSection/>
    </motion.main>
  )
}

"use client"
import styles from './page.module.scss'
import {HeroSection, BioSection, PortfolioSection, ContactSection} from "@/components";
import {useEventListener} from "usehooks-ts";
import {useRef} from "react";

export default function Home() {

  const bioRef = useRef(null)
  const portfolioRef = useRef(null)
  const contactRef = useRef(null)

 function scrollTo(section: string) {

 }

  return (
    <main className={styles.main}>
      <HeroSection/>
      <div ref={bioRef}/>
      <BioSection/>
      <div ref={portfolioRef}/>
      <PortfolioSection/>
      <div ref={contactRef}/>
      <ContactSection/>
    </main>
  )
}

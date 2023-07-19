import Image from 'next/image'
import styles from './page.module.scss'
import {Header} from "@/shared-components";
import {HeroSection, BioSection, WorkSection, ContactSection} from "@/components";

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection/>
      <BioSection/>
      <WorkSection/>
      <ContactSection/>
    </main>
  )
}

import styles from './page.module.scss'
import {Overlays, HeroSection, BioSection, PortfolioSection, ContactSection} from "@/components";

export default function Home() {

  return (
    <main className={styles.main}>
      {/*<Overlays/>*/}
      <HeroSection/>
      <BioSection/>
      <PortfolioSection/>
      <ContactSection/>
    </main>
  )
}

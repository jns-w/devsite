import { PortfolioSection } from "@/components/portfolio-section/portfolio-section"
import { ContactSection } from "@/components/contact-section/contact-section"
import { HeroSection } from "@/components/hero-section/hero-section"
import { BioSection } from "@/components/bio-section/bio-section"

import styles from "./page.module.scss"

export default function Home() {
  return (
    <main
      id="Top"
      className={styles.main}
    >
      <HeroSection />
      <BioSection />
      <PortfolioSection />
      <ContactSection />
    </main>
  )
}
import { BioSection, ContactSection, HeroSection, PortfolioSection } from "@/components"

import styles from "./page.module.scss"

export default function Home() {
  return (
    <main
      id="Top"
      className={styles.main}
      // initial={{ opacity: 0 }}
      // animate={{
      //   opacity: 1,
      //   transition: {
      //     opacity: {
      //       duration: 0.2,
      //       ease: "easeIn",
      //     },
      //   },
      // }}
    >
      <HeroSection />
      <BioSection />
      <PortfolioSection />
      <ContactSection />
    </main>
  )
}
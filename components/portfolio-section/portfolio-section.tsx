"use client"
import PortfolioCard from "@/components/portfolio-section/portfolio-card/PortfolioCard"
import { portfolios } from "@/data/portfolioData"
import { motion } from "framer-motion"

import styles from "./portfolio-section.module.scss"


export function PortfolioSection() {

  return (
    <div className={styles.container}>
      <a id="Portfolio" className={styles.scrollReference} />
      <div className={styles.headerContainer}>
        <h1>Portfolio</h1>
      </div>
      <motion.div className={styles.projectsGrid}>
        {portfolios.map(el => (
          <PortfolioCard
            key={el.name}
            name={el.name}
            type={el.type}
            slug={el.slug}
            tags={el.tags}
            links={el.links}
            description={el.description} />
        ))}
      </motion.div>
    </div>
  )
}


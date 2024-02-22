"use client"
import styles from './portfolio-section.module.scss';
import {motion} from "framer-motion";
import {portfolios} from "@/data/portfolioData";
import PortfolioCard from "@/components/portfolio-section/portfolio-card/PortfolioCard";



export function PortfolioSection() {

  return (
    <div className={styles.wrapper} id="Portfolio">
      <div className={styles.container}>
        <div className={styles.headerContainer}>
          <h1>Portfolio</h1>
        </div>
        <motion.div className={styles.projectsGrid}>
          {portfolios.map(el => (
            <PortfolioCard
              key={el.name}
              name={el.name}
              description={el.description}
              type={el.type}
              slug={el.slug}
              tags={el.tags}
              links={el.links}/>
          ))}
        </motion.div>
      </div>
    </div>
  )
}


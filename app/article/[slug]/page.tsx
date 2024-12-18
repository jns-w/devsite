import Article from "@/app/article/[slug]/Article"
import { portfolios } from "@/data/portfolioData"

import styles from "./article.module.scss"

export default function Page() {

  return (
    <div className={styles.main}>
      <Article />
    </div>
  )
}
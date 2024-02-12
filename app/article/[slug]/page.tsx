import styles from "./article.module.scss"
import {portfolios} from "@/data/portfolioData";
import Article from "@/app/article/[slug]/Article";

export default function Page() {

  return (
    <div className={styles.main}>
      <Article/>
    </div>
  )
}
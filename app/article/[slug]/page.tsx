import styles from "./article.module.scss"
import Article from "./article"

export default function Page() {

  return (
    <div className={styles.main}>
      <Article />
    </div>
  )
}
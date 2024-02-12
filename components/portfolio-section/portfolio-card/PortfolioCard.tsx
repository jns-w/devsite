import {motion} from "framer-motion";
import styles from './portfolio-card.module.scss'
import {ArrowRight} from "lucide-react";
import {useRouter} from "next/navigation";

export default function PortfolioCard(props) {
  const router = useRouter()
  return (
    <motion.div
      className={styles.card}
      onClick={() => router.push(`/article/${props.slug}`)}
      whileHover={{
        scale: 1.05,
        transition: {
          type: "spring",
          stiffness: 500,
          damping: 20,
          duration: 0.1,
        },
      }}
    >
      <div className={styles.cardBody}>
        <h3>
          {props.type}
        </h3>
        <h2>
          {props.title}
        </h2>
        <p>
          {props.description}
        </p>
      </div>

      <div className={styles.iconDiv}>
        <ArrowRight strokeWidth={0.8}/>
      </div>


    </motion.div>
  )
}
import {Portfolio} from "@/data/portfolioData";
import {useRouter} from "next/navigation";
import {ArrowRight} from "lucide-react";
import {motion} from "framer-motion";

import styles from './portfolio-card.module.scss'

export default function PortfolioCard(props: Portfolio) {
  const router = useRouter()
  return (
    <motion.div
      className={styles.card}
      onClick={() => router.push(`/article/${props.slug}`)}
      whileHover={{
        scale: 1.05,
        transition: {
          damping: 20,
          duration: 0.1,
          stiffness: 500,
          type: "spring",
        },
      }}
    >
      <div className={styles.cardBody}>
        <h3>
          {props.type}
        </h3>
        <h2>
          {props.name}
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
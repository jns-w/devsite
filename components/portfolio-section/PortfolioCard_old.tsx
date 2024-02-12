import {PortfolioLink} from "@/data/portfolioData";
import {useRef, useState} from "react";
import {useAtom} from "jotai/index";
import {modalAtom} from "@/atoms/ui";
import {useRouter} from "next/navigation";
import {motion, Variants} from "framer-motion";
import styles from "@/components/portfolio-section/portfolio-section.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye} from "@fortawesome/free-regular-svg-icons";
import {faArrowUpRightFromSquare, faCode} from "@fortawesome/free-solid-svg-icons";

type CardProps = {
  title: string,
  description: string,
  slug: string,
  tags?: string[],
  links?: PortfolioLink[]
}

export default function PortfolioCard(props: CardProps) {

  const [isExpanded, setIsExpanded] = useState(false)
  const [modalOpen, setModalOpen] = useAtom(modalAtom)

  function handleExpand() {
    setIsExpanded(!isExpanded)
  }

  const router = useRouter()

  const ref = useRef(null)

  const placeholderTags = ["Javascript", "Next", "Nodejs"]
  const placeholderLinks: PortfolioLink[] = [
    {
      type: "Demo",
      href: "a"
    },
    {
      type: "Code",
      href: "a",
    },
    {
      type: "Live",
      href: "a"
    }
  ]

  const cardVariant: Variants = {
    default: {
      boxShadow: "0 1px 1px hsl(0deg 0% 0% / 0.075), 0 2px 2px hsl(0deg 0% 0% / 0.075), 0 0px 4px hsl(0deg 0% 0% / 0.075), 0 0px 8px hsl(0deg 0% 0% / 0.075)",
      scale: 1,
      transition: {
        ease: [.22, .43, .12, 1 ],
        duration: .5,
      },
      position: "relative",
      top: "0px",
      left: "0px",
      // width: "100%",
    },
    hovered: {
      boxShadow: "0 1px 1px hsl(0deg 0% 0% / 0.075), 0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075), 0 8px 8px hsl(0deg 0% 0% / 0.075)",
      scale: 1.05,
      transition: {ease: [.22, .43, .12, 1 ], duration: .5},
    },
  }


  const buttonVariant: Variants = {
    default: {
      backgroundColor: "var(--theme-mild-focal)",
      color: "var(--theme-mild-focal-text-color)",
      transition: {type: "spring", stiffness: 500, damping: 70, duration: .7}
    },
    hovered: {
      backgroundColor: "var(--theme-accent)",
      transition: {type: "spring", stiffness: 500, damping: 70, duration: .7}
    },
  }

  const iconVariant: Variants = {
    default: {
      rotateZ: 0,
      transition: {type: "easeOut", stiffness: 500, damping: 70, duration: .7}
    },
    hovered: {
      rotateZ: 360,
      transition: {type: "spring", stiffness: 500, damping: 70, duration: .7}
    },
  }

  return (
    <motion.div
      className={styles.cardWrapper}
      onClick={() => router.push(`/article/${props.slug}`)}
      ref={ref}
      layout
    >
      <motion.div
        className={styles.card}
        variants={cardVariant}
        animate="default"
        whileHover="hovered"
      >

        <div className={styles.thumbnail}/>
        <h2>{props.title}</h2>
        <div className={styles.tags}>
          {props.tags ?
            props.tags.map(el => (
              <span key={el}>{el}</span>
            ))
            :
            placeholderTags.map(el => (
              <span key={el}>{el}</span>
            ))
          }
        </div>
        <div className={styles.descriptionContainer}>
          <p>{props.description}</p>
        </div>

        <div className={styles.buttons}>

          {
            props.links ?
              props.links.map(el => {
                if (!el.href) return;
                return <motion.button
                  key={el.type}
                  animate="default"
                  whileHover="hovered"
                  variants={buttonVariant}
                >
                  <motion.div
                    variants={iconVariant}
                  >
                    {el.type === "Demo" &&
                        <FontAwesomeIcon icon={faEye}/>}
                    {el.type === "Code" &&
                        <FontAwesomeIcon icon={faCode}/>}
                    {el.type === "Live" &&
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>}
                  </motion.div>
                  {el.type}
                </motion.button>
              })
              :
              placeholderLinks.map(el => {
                if (!el.href) return;
                return <motion.button
                  key={el.type}
                  animate="default"
                  whileHover="hovered"
                  variants={buttonVariant}>
                  <motion.div
                    variants={iconVariant}
                  >
                    {el.type === "Demo" &&
                        <FontAwesomeIcon icon={faEye}/>}
                    {el.type === "Code" &&
                        <FontAwesomeIcon icon={faCode}/>}
                    {el.type === "Live" &&
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>}
                  </motion.div>
                  {el.type}
                </motion.button>
              })
          }
        </div>
      </motion.div>
    </motion.div>
  )
}

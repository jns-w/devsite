"use client"
import styles from './portfolio-section.module.scss';
import {motion} from "framer-motion";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye} from "@fortawesome/free-regular-svg-icons";
import {faArrowUpRightFromSquare, faCode} from "@fortawesome/free-solid-svg-icons";

type Link = {
  type: "Demo" | "Code" | "Live",
  href: string
}

type Portfolio = {
  title: string,
  description: string,
  tags: string[],
  links: Link[]
}

export function PortfolioSection() {

  const portfolios: Portfolio[] = [
    {
      title: "NotGPT",
      description: "Full-stack search engine experiment. Exploring in-memory auto-completion database (trie) in rust, and plenty of fun animations on a react frontend.",
      tags: ["Typescript", "Rust", "React", "Sass", "Actix"],
      links: [
        {
          type: "Demo",
          href: "y"
        },
        {
          type: "Code",
          href: "y",
        },
        {
          type: "Live",
          href: ""
        }
      ]

    },
    {
      title: "Blocks",
      description: "Full-stack timer app that helps you focus and track productive hours. Multi-device support with real-time sync.",
      tags: ["Typescript", "Nodejs", "React", "Styled-components", "MongoDB", "SocketIO"],
      links: [
        {
          type: "Demo",
          href: "y"
        },
        {
          type: "Code",
          href: "y",
        },
        {
          type: "Live",
          href: "y"
        }
      ]
    }
  ]

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.headerContainer}>
          <h1 id="Portfolio">Portfolio</h1>
          <p>coding is a passion of mine and this is a collection of my projects. Have a look.</p>
        </div>
        <div className={styles.projectsGrid}>
          {portfolios.map(el => (
            <Card key={el.title} title={el.title} description={el.description} tags={el.tags} links={el.links}/>
          ))}
          <Card title={"title"}
                description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."}/>
          <Card title={"title"}
                description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."}/>
        </div>
      </div>
    </div>
  )
}


type CardProps = {
  title: string,
  description: string,
  tags?: string[],
  links?: Link[]
}

function Card(props: CardProps) {

  const placeholderTags = ["Javascript", "Next", "Nodejs"]
  const placeholderLinks: Link[] = [
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

  return (
    <motion.div
      className={styles.card}
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
      <p>{props.description}</p>

      <div className={styles.buttons}>

        {
          props.links ?
            props.links.map(el => {
              if (!el.href) return;
              return <motion.button key={el.type} whileHover="hovered">
                <motion.div
                  variants={{
                    hovered: {rotateZ: 360, transition: {type: "spring", stiffness: 500, damping: 70, duration: .7}},
                  }}
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
             return <motion.button key={el.type} whileHover="hovered">
                <motion.div
                  variants={{
                    hovered: {rotateZ: 360, transition: {type: "spring", stiffness: 500, damping: 100, duration: .7}},
                  }}
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
  )
}
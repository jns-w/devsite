"use client"
import styles from './work-section.module.scss';
import {motion} from "framer-motion";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye} from "@fortawesome/free-regular-svg-icons";
import {faCode} from "@fortawesome/free-solid-svg-icons";

export function WorkSection() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.headerContainer}>
          <h1 id="Portfolio">Portfolio</h1>
          <p>coding is a passion of mine and this is a collection of my projects. Have a look.</p>
        </div>
        <div className={styles.projectsGrid}>
          <Card title={"NotGPT"} description={"Full-stack search engine clone."}/>
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
  title: string;
  description: string;

}

function Card(props: CardProps) {
  return (
    <motion.div
      className={styles.card}
    >
      <div className={styles.thumbnail}/>
      <h2>{props.title}</h2>
      <div className={styles.tags}>
        <span>Javascript</span>
        <span>Rust</span>
        <span>Nodejs</span>
      </div>
      <p>{props.description}</p>

      <div className={styles.buttons}>
        <button>
          <FontAwesomeIcon icon={faEye}/>
          View
        </button>
        <button>
          <FontAwesomeIcon icon={faCode}/>
          Code</button>
      </div>

    </motion.div>
  )
}
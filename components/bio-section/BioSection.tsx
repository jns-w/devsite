"use client"

import styles from './bio-section.module.scss';
import {archivo} from "@/styles/fonts";
import {motion} from "framer-motion";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTurnDown} from "@fortawesome/free-solid-svg-icons";

export function BioSection() {

  const buttons = [
    {
      text: "Portfolio"
    },
    {
      text: "Contact",
    },
    {
      text: "Resume"
    }
  ]

  const button = {
    normal: {},
    hovered: {
      width: "95px",
      backgroundColor: "var(--theme-accent)",
      transition: {type: "spring", stiffness: 500, damping: 20, duration: 0.1}
    }
  }

  const buttonIcon = {
    normal: {
      opacity: 0,
      rotate: -110,
      x: -15,
    },
    hovered: {
      opacity: 1,
      rotate: 0,
      x: 0,
      transition: {type: "spring", stiffness: 500, damping: 10, duration: 0.3}
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.bioGroup}>
          <div className={styles.photo}/>
          <div className={styles.bio}>

            <h2 className={archivo.className}>Jonas Wong</h2>

            <text className={archivo.className}>
              Based in Singapore 🇸🇬.
            </text>


          </div>


        </div>

        <div className={`${styles.buttonsGroup} ${archivo.className}`}>
          {
            buttons.map((el, i) => {
              return <motion.button
                style={{position: "relative"}}
                key={el.text}
                animate={{backgroundColor: "#2c2c2c"}}
                variants={button}
                initial="normal"
                whileHover="hovered"
              >
                {el.text}
                <motion.div
                  style={{
                    position: "absolute",
                    right: "30px",
                  }}
                  variants={buttonIcon}
                >
                  <FontAwesomeIcon
                    icon={faTurnDown}
                  />
                </motion.div>

              </motion.button>
            })
          }
        </div>

        <div className={styles.description}>
          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam.
        </div>
      </div>
    </div>
  )
}
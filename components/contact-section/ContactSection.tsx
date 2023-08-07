"use client"
import styles from './contact-section.module.scss';
import {motion} from "framer-motion";
import Icon from "@mdi/react";
import {mdiEmailOutline, mdiGithub, mdiLinkedin, mdiTwitter} from "@mdi/js";

export function ContactSection() {

  const links = [
    {
      name: "Mail",
      icon: mdiEmailOutline,
      url: "mailto:",
    },
    {
      name: "LinkedIn",
      icon: mdiLinkedin,
      url: "-",
    },
    {
      name: "Github",
      icon: mdiGithub,
      url: "-",
    },
    {
      name: "Twitter",
      icon: mdiTwitter,
      url: "-",
    }
  ]

  return (
    <div className={styles.wrapper}>
      <div className={styles.headerContainer} id="Contact">
        <h1>Let&apos;s connect</h1>
        <p>Feel free to reach out to me on any of the following platforms.</p>

      </div>
      <div className={styles.buttonsContainer}>
        {
          links.map(el => (
            <motion.button
              key={el.name}
              className={styles.button}
              animate={{
                backgroundColor: "var(--theme-focal)",
              }}
              whileHover={{
                backgroundColor: "var(--theme-accent)",
              }}
            >
              <Icon className={styles.icon} path={el.icon} />
              {el.name}
            </motion.button>
          ))
        }
      </div>
    </div>
  )
}
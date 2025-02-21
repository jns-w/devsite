"use client"
import { mdiEmailOutline, mdiGithub, mdiLinkedin, mdiTwitter } from "@mdi/js"
import { motion } from "framer-motion"
import Icon from "@mdi/react"

import styles from "./contact-section.module.scss"

export function ContactSection() {

  const links = [
    {
      icon: mdiEmailOutline,
      name: "Mail",
      url: "mailto:jns.w@icloud.com",
    },
    {
      icon: mdiLinkedin,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/jns-w",
    },
    {
      icon: mdiGithub,
      name: "Github",
      url: "https://github.com/jns-w",
    },
    {
      icon: mdiTwitter,
      name: "Twitter",
      url: "https://x.com/jnsw0",
    },
  ]

  return (
    <div className={styles.contactSection}>
      <a id="Contact" className="absolute top-[-100px]" />
      <div className={styles.headerContainer}>
        <h1>Let&apos;s connect</h1>
        <p>Feel free to reach out to me on any of the following platforms.</p>
      </div>
      <div className={styles.buttonsContainer}>
        {
          links.map(el => (
            <motion.a
              href={el.url}
              key={el.name}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}
              animate={{
                backgroundColor: "var(--theme-focal)",
              }}
              whileHover={{
                backgroundColor: "var(--theme-accent)",
              }}
            >
              <Icon path={el.icon} className={styles.icon} />
              {el.name}
            </motion.a>
          ))
        }
      </div>
    </div>
  )
}
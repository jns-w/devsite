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
      url: "mailto:jns.w@icloud.com",
    },
    {
      name: "LinkedIn",
      icon: mdiLinkedin,
      url: "https://www.linkedin.com/in/jns-w",
    },
    {
      name: "Github",
      icon: mdiGithub,
      url: "https://github.com/jns-w",
    },
    {
      name: "Twitter",
      icon: mdiTwitter,
      url: "-",
    }
  ]

  return (
    <div className={styles.wrapper} id="Contact">
      <div className={styles.headerContainer}>
        <h1>Let&apos;s connect</h1>
        <p>Feel free to reach out to me on any of the following platforms.</p>

      </div>
      <div className={styles.buttonsContainer}>
        {
          links.map(el => (
            <motion.a
              href={el.url}
              target="_blank"
              rel="noopener noreferrer"
              key={el.name}
              className={styles.button}
              animate={{
                backgroundColor: "var(--theme-focal)",
              }}
              whileHover={{
                backgroundColor: "var(--theme-accent)",
              }}
            >
              <Icon className={styles.icon} path={el.icon}/>
              {el.name}
            </motion.a>
          ))
        }
      </div>
    </div>
  )
}
"use client"

import styles from './header.module.scss';
import {archivo} from "@/styles/fonts";
import {ThemeToggle} from "./theme-toggle/ThemeToggle"
import {useState} from "react";
import {motion} from "framer-motion";
import {mdiEmailOutline, mdiGithub, mdiLinkedin} from "@mdi/js";
import Icon from "@mdi/react";

export function Header() {
  const navLinks = [
    {label: "Portfolio", href: "#Portfolio"},
    {label: "Bio", href: "#Bio"},
    {label: "Contact", href: "#Contact"},
  ]
  const [hoveredOn, setHoveredOn] = useState(-1);


  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <h2 className={archivo.className}>
            JNS-W
          </h2>
        </div>
        <nav className={styles.navigation}>
          <ul className={`${styles.navigation} ${archivo.className}`}>
            {
              navLinks.map((item, index) => (
                <li key={item.label}
                    onMouseOver={() => setHoveredOn(index)}
                    onMouseOut={() => setHoveredOn(-1)}
                >
                  <a
                    href={item.href}
                  >
                    {item.label}

                  </a>

                  {index === hoveredOn ? (
                      <motion.div
                        className={styles.highlight}
                        layoutId={"highlight"}
                        animate={{opacity: 0.7, scale: 1}}
                        initial={{opacity: 0.2, scale: 0.7}}
                        exit={{opacity: 0}}
                        transition={{type: "spring", stiffness: 450, damping: 30, duration: 0.2}}
                      />)
                    : null}
                </li>
              ))
            }
          </ul>
        </nav>


        <div className={styles.right}>
          <Icon className={styles.brands} path={mdiGithub}/>
          <Icon className={styles.brands} path={mdiLinkedin}/>
          <Icon className={styles.brands} path={mdiEmailOutline}/>
          <ThemeToggle/>
        </div>
      </div>
      <div className={styles.background}></div>
    </div>
  )

}


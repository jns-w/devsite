"use client"

import styles from './header.module.scss';
import {archivo} from "@/styles/fonts";
import {ThemeToggle} from "./theme-toggle/ThemeToggle"
import {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {mdiEmailOutline, mdiGithub, mdiLinkedin} from "@mdi/js";
import Icon from "@mdi/react";
import Link from 'next/link';
import {useParams, usePathname} from "next/navigation";

export function Header() {
  const path = usePathname()
  const navLinks = [
    {label: "Portfolio", href: "#Portfolio"},
    {label: "Bio", href: "#Bio"},
    {label: "Contact", href: "#Contact"},
  ]
  const [hoveredOn, setHoveredOn] = useState(-1);


  return (
    <motion.div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href={path === "/" ? "#Top" : "/"} className={archivo.className}>
            JNS-W
          </Link>
        </div>

        <nav className={styles.navigation}
        >
          <motion.ul className={`${styles.navigation} ${archivo.className}`}
          >
            {
              navLinks.map((item, index) => (
                <li key={item.label}
                    onMouseOver={() => setHoveredOn(index)}
                    onMouseOut={() => setHoveredOn(-1)}
                >
                  <a
                    href={path === "/" ? item.href : "/" + item.href}
                  >
                    {item.label}

                  </a>
                  <AnimatePresence>
                    {index === hoveredOn ? (
                        <motion.div
                          key={item.label}
                          layoutId={"underline"}
                          className={styles.highlight}
                          initial={{
                            opacity: 0.2,
                            scaleX: 0.5,
                          }}
                          animate={{
                            opacity: 0.7,
                            scaleX: 1,
                            y: 0,
                          }}
                          transition={{
                            layout: {
                              type: "spring",
                              stiffness: 400,
                              damping: 25,
                              duration: 0.2,
                            },
                          }
                          }
                          exit={{
                            opacity: 0,
                            scaleX: 0,
                            transition: {
                              duration: .2,
                              ease: "easeOut"
                            }
                          }}
                        />)
                      : null
                    }
                  </AnimatePresence>
                </li>
              ))
            }
          </motion.ul>
        </nav>


        <div className={styles.right}>
          <a
           target="_blank" href="https://github.com/jns-w" rel="noopener noreferrer"
          >
            <Icon className={styles.brands} path={mdiGithub}/>
          </a>
          <a
            target="_blank" href="" rel="noopener noreferrer"
          >

            <Icon className={styles.brands} path={mdiLinkedin}/>
          </a>
          <a href="mailto:jns.w@icloud.com" rel="noopener noreferrer">
            <Icon className={styles.brands} path={mdiEmailOutline}/>
          </a>
          <ThemeToggle/>
        </div>
      </div>
      <div className={styles.background}></div>
    </motion.div>
  )

}


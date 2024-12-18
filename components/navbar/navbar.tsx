"use client"

import { mdiEmailOutline, mdiGithub, mdiLinkedin } from "@mdi/js"
import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { archivo } from "@/styles/fonts"
import { useState } from "react"
import Icon from "@mdi/react"
import Link from "next/link"

import { ThemeToggle } from "./theme-toggle/theme-toggle"
import styles from "./navbar.module.scss"

export function Navbar() {
  const [burgerMenuIsOpen, setBurgerMenuIsOpen] = useState(false)
  const path = usePathname()
  const navLinks = [
    { href: "#Portfolio", label: "Portfolio" },
    { href: "#Bio", label: "Bio" },
    { href: "#Contact", label: "Contact" },
  ]
  const [hoveredOn, setHoveredOn] = useState(-1)


  return (
    <motion.div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link className={archivo.className} href={path === "/" ? "#Top" : "/"}>
            JNS-W
          </Link>
        </div>

        <nav className={styles.navigation}>
          <motion.ul className={`${styles.navigation} ${archivo.className}`}
          >
            {
              navLinks.map((item, index) => (
                <li key={item.label}
                    onMouseOut={() => setHoveredOn(-1)}
                    onMouseOver={() => setHoveredOn(index)}
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
                          exit={{
                            opacity: 0,
                            scaleX: 0,
                            transition: {
                              duration: .2,
                              ease: "easeOut",
                            },
                          }}
                          transition={{
                            layout: {
                              damping: 25,
                              duration: 0.2,
                              stiffness: 400,
                              type: "spring",
                            },
                          }
                          }
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
            target="_blank" rel="noopener noreferrer" href="https://github.com/jns-w"
          >
            <Icon path={mdiGithub} className={styles.brands} />
          </a>
          <a
            target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jns-w/"
          >

            <Icon path={mdiLinkedin} className={styles.brands} />
          </a>
          <a rel="noopener noreferrer" href="mailto:jns.w@icloud.com">
            <Icon path={mdiEmailOutline} className={styles.brands} />
          </a>
          <ThemeToggle />
        </div>

        {/*<button*/}
        {/*  // onClick={() => setBurgerMenuIsOpen(prevState => !prevState)}*/}
        {/*  className={clsx(*/}
        {/*    styles.hamburgerIcon,*/}
        {/*    burgerMenuIsOpen && styles.opened,*/}
        {/*  )}*/}
        {/*  onClick={() => {*/}
        {/*    // setBurgerMenuAnimation("open")*/}
        {/*    setTimeout(() => {*/}
        {/*      setBurgerMenuIsOpen(prevState => !prevState)*/}
        {/*    }, 100)*/}
        {/*  }}>*/}
        {/*  <div className={styles.line} />*/}
        {/*  <div className={styles.line} />*/}
        {/*  <div className={styles.line} />*/}
        {/*</button>*/}
      </div>


      <div className={styles.background}></div>
    </motion.div>
  )
}


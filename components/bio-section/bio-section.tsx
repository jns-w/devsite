"use client"
import {mdiArrowDownRightBold} from "@mdi/js";
import {useRouter} from "next/navigation";
import {archivo} from "@/styles/fonts";
import {motion} from "framer-motion";
import Icon from "@mdi/react";
import Link from 'next/link';

import styles from './bio-section.module.scss';

export function BioSection() {
  const router = useRouter()

  const buttons = [
    {
      href: "/#Portfolio",
      text: "Portfolio"
    },
    {
      href: "/#Contact",
      text: "Contact"
    },
    {
      href: "/resume",
      text: "Resume"
    }
  ]

  const button = {
    hovered: {
      backgroundColor: "var(--theme-accent)",
      transition: {
        damping: 20,
        duration: 0.1,
        stiffness: 500,
        type: "spring"
      },
      width: "95px"
    },
    normal: {
      backgroundColor: "var(--theme-focal)"
    }
  }

  const buttonIcon = {
    hovered: {
      opacity: 1,
      rotate: 0,
      transition: {
        damping: 10,
        duration: 0.3,
        stiffness: 500,
        type: "spring"
      },
      x: 0
    },
    normal: {
      opacity: 0,
      rotate: -110,
      x: -15,
    }
  }

  return (
      <div className={styles.container}>
        <a id="Bio" className={styles.scrollReference}/>
        <div className={styles.bioGroup}>
          <motion.div viewport={{once: true}}
                      className={styles.photo}
                      initial={{opacity: 0, x: -10}}
                      whileInView={{
                        opacity: 1,
                        transition: {
                          delay: 0.2,
                          duration: 0.7,
                        },
                        x: 0
                      }}/>
          <motion.div className={styles.bio}>

            <h2 className={archivo.className}>Jonas Wong</h2>

            <text className={archivo.className}>
              Based in Singapore 🇸🇬.
            </text>

          </motion.div>

        </div>

        <div className={`${styles.buttonsGroup} ${archivo.className}`}>
          {
            buttons.map((el, i) => {
              return <motion.button
                key={el.text}
                initial="normal"
                variants={button}
                whileHover="hovered"
                style={{position: "relative"}}
                onClick={() => router.push(el.href)}
                animate={{
                  backgroundColor: "var(--theme-focal)",
                }}
              >
                {el.text}
                <motion.div
                  variants={buttonIcon}
                  style={{
                    position: "absolute",
                    right: "30px",
                  }}
                >
                  <Icon className={styles.icon} path={mdiArrowDownRightBold}/>
                </motion.div>
              </motion.button>
            })
          }
        </div>

        <div className={styles.description}>
         Hi there! I am  a software developer who loves building. Check out my <Link href="#Portfolio">portfolio</Link> to see what I can do. And hit me up at through any of these <Link href="#Contact">channels</Link>!
        </div>
      </div>
  )
}
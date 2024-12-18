import { useEventListener, useOnClickOutside } from "usehooks-ts"
import { mdiWindowClose } from "@mdi/js"
import { motion } from "framer-motion"
import { modalAtom } from "@/atoms/ui"
import { useAtom } from "jotai"
import { useRef } from "react"
import Icon from "@mdi/react"

import styles from "./modal.module.scss"

export default function Modal() {

  const modalRef = useRef<HTMLDivElement>(null)
  const [modalOpen, setModalOpen] = useAtom(modalAtom)

  useOnClickOutside(modalRef, () => setModalOpen(false))
  useEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      setModalOpen(false)
    }
  })


  return (
    <motion.div
      className={styles.wrapper}
      initial={{
        opacity: 0,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.2,
          type: "ease",
        },
      }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.2,
          type: "ease",
        },
      }}
    >
      <motion.div
        ref={modalRef}
        className={styles.container}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        initial={{
          opacity: 0,
          scale: 0.5,
        }}
        transition={{
          duration: .3,
          ease: [.25, .5, .35, 1],
        }}
        exit={{
          opacity: 0,
          scale: 0.5,
          transition: { duration: 0.2, type: "ease" },
        }}
      >
        <Icon size={1} path={mdiWindowClose} className={styles.icon} />
        <div className={styles.contentContainer}>
          <div className={styles.content}>
            <h2> Blocks</h2>
          </div>
        </div>

      </motion.div>
    </motion.div>
  )
}
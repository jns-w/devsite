import {motion} from 'framer-motion';
import styles from './modal.module.scss';
import {mdiWindowClose} from "@mdi/js";
import Icon from "@mdi/react";
import {useRef} from "react";
import {useAtom} from "jotai";
import {modalAtom} from "@/atoms/ui";
import {useEventListener, useOnClickOutside} from "usehooks-ts";

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
        opacity: 0
      }}
      animate={{
        opacity: 1,
        transition: {
          type: "ease",
          duration: 0.2
        }
      }}
      exit={{
        opacity: 0,
        transition: {
          type: "ease",
          duration: 0.2
        }
      }}
    >
      <motion.div
        ref={modalRef}
        className={styles.container}
        initial={{
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          opacity: 1,
          scale: 1
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 20,
          duration: 0.3
        }}
        exit={{
          transition: {type: "ease", duration: 0.2},
          scale: 0.5,
          opacity: 0,
        }}
      >
        <Icon path={mdiWindowClose} size={1} className={styles.icon} onClick={() => setModalOpen(false)}/>
        <div className={styles.contentContainer}>
          <div className={styles.content}>
            <h2> Blocks</h2>
          </div>
        </div>

      </motion.div>
    </motion.div>
  )
}
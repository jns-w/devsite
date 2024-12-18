import { ArrowUpToLine } from "lucide-react"
import { archivo } from "@/styles/fonts"
import Link from "next/link"

import styles from "./bottom-bar.module.scss"

export function BottomBar() {
  return <div className={styles.bottomBarWrapper}>
    <div className={styles.bottomBarContainer}>
      <nav>
        <ul className={archivo.className}>
          <li><Link href="/#Bio">Bio</Link></li>
          <li><Link href="/#Portfolio">Portfolio</Link></li>
          <li><Link href="/#Contact">Contact</Link></li>
        </ul>
      </nav>
    </div>

    <button className={styles.goToTopBtn} onClick={() => window.scrollTo(0, 0)}><ArrowUpToLine size={15} /></button>
  </div>
}
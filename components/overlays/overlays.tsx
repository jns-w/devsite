"use client"
import { BottomBar } from "@/components/bottom-bar/bottom-bar"
import Modal from "@/shared-components/modal/Modal"
import { AnimatePresence } from "framer-motion"
import { modalAtom } from "@/atoms/ui"
import { useEffect } from "react"
import { useAtom } from "jotai"

export function Overlays() {
  const [modalOpen, setModalOpen] = useAtom(modalAtom)

  useEffect(() => {
    if (modalOpen) {
      document.documentElement.classList.add("no-scroll")
    } else {
      document.documentElement.classList.remove("no-scroll")
    }
  }, [modalOpen])

  return (
    <>
      <AnimatePresence>
        {modalOpen && <Modal />}
        <BottomBar />
      </AnimatePresence>
    </>
  )
}
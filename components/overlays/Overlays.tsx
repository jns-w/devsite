"use client"
import Modal from "@/shared-components/modal/Modal";
import {useAtom} from "jotai";
import {modalAtom} from "@/atoms/ui";
import {AnimatePresence} from "framer-motion";
import {useEffect} from "react";

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
        {modalOpen && <Modal/>}
      </AnimatePresence>
    </>
  )
}
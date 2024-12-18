"use client"
import Modal from "@/shared-components/modal/Modal";
import {AnimatePresence} from "framer-motion";
import {modalAtom} from "@/atoms/ui";
import {useEffect} from "react";
import {useAtom} from "jotai";

import { BottomBar } from "../bottom-bar/bottom-bar";

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
        <BottomBar/>
      </AnimatePresence>
    </>
  )
}
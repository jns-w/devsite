"use client"
import "./globals.scss"

import { Overlays } from "@/components/overlays/overlays"
import { Navbar } from "@/components/navbar/navbar"
import { Inter } from "next/font/google"
import { ReactNode } from "react"
import { Provider } from "jotai"

const inter = Inter({ subsets: ["latin"] })

// export const metadata = {
//   title: 'Jonas Wong',
//   description: 'Junior Software Dev',
// }

export default function RootLayout({ children }: {
  children: ReactNode
}) {
  return (
    <html lang="en">
    <body
      className={`${inter.className}`}
      style={{
        overflow: "hidden",
      }}
    >
    <Provider>
      <Navbar />
      <Overlays />
      {children}
    </Provider>
    </body>
    </html>
  )
}

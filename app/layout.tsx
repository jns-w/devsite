"use client"
import "./globals.scss"

import { Navbar, Overlays } from "@/components"
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

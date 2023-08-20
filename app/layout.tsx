import './globals.scss'
import {Inter} from 'next/font/google'
import {Header, Overlays} from "@/components";
import {inspect} from "util";
import styles from "./page.module.scss";

const inter = Inter({subsets: ['latin']})

export const metadata = {
  title: 'Jonas Wong',
  description: 'Junior Software Dev',
}

export default function RootLayout({children,}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className={`${inter.className}`}>
    <Header/>
    <Overlays/>
    {children}
    </body>
    </html>
  )
}

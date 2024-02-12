import './globals.scss'
import {Inter} from 'next/font/google'
import {Header, Overlays} from "@/components";

const inter = Inter({subsets: ['latin']})

// export const metadata = {
//   title: 'Jonas Wong',
//   description: 'Junior Software Dev',
// }

export default function RootLayout({children,}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body
      className={`${inter.className}`}
      style={{
        overflow: "hidden"
      }}
    >
    <Header/>
    <Overlays/>
        {children}
    </body>
    </html>
  )
}

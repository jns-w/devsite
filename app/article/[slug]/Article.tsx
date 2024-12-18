"use client"
import { Portfolio, PortfolioLink, portfolios } from "@/data/portfolioData"
import { AppWindow, Github, MousePointerSquare } from "lucide-react"
import { mdiAlertCircleOutline, mdiArrowLeft } from "@mdi/js"
import { AnimatePresence, motion } from "framer-motion"
import { useParams, useRouter } from "next/navigation"
import { Suspense, useState } from "react"
import Markdown from "react-markdown"
import Icon from "@mdi/react"
import Link from "next/link"
import axios from "axios"

import styles from "./article.module.scss"


type Props = {
  links?: PortfolioLink[]
  slug?: string
  tags?: string[]
}
const client = axios.create({
  baseURL: "/api",
  responseType: "json",
  timeout: 10000,
})

async function fetchContent(slug: string) {
  const data = await client.get(`/article?slug=${slug}`).then(
    res => res.data,
  )
  return data.content
}

export default function Article(props: Props) {
  const params = useParams()

  const portfolioData = portfolios.find(el => el.slug?.toLowerCase() === params?.slug)

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Links links={portfolioData?.links} />
        <ArticleContent tags={portfolioData?.tags} slug={params?.slug as string} />
      </Suspense>
    </>
  )
}


async function ArticleContent(props: { slug?: string, tags?: string[] }) {
  const [downloadProgress, setDownloadProgress] = useState<number>(0)
  const router = useRouter()

  let content = ""
  if (props.slug) content = await fetchContent(props.slug)

  return (
    <motion.div
      key="article"
      initial={{
        filter: "blur(2px)",
        opacity: 0,
        y: 25,
      }}
      animate={{
        filter: "blur(0px)",
        opacity: 1,
        transition: {
          duration: 0.4,
          ease: "easeOut",
          filter: {
            duration: 0.2,
            ease: "easeIn",
          },
          opacity: {
            duration: 0.3,
            ease: "linear",
          },
        },
        y: 0,
      }}
    >
      <article className={styles.content}>
        <button
          className={styles.backButton}
          onClick={() => router.push("/#Portfolio", { scroll: true })}
        >
          <Icon size={0.7} path={mdiArrowLeft} />
          Portfolio
        </button>

        {
          content ? (
            <Markdown
              components={{
                a: ({ children, ...props }) => {
                  return <Link href={props.href as string}>
                    {children}
                  </Link>
                },
              }}
            >
              {content}
            </Markdown>
          ) : (
            <div
              className={styles.warningMessageDiv}
            >
              <Icon size={1.5} path={mdiAlertCircleOutline} />

              <h2>
                The article you are looking for does not exist, click <Link href="/#Portfolio">here</Link> to go
                back.
              </h2>
            </div>
          )
        }
        <Tags tags={props.tags} />
      </article>
    </motion.div>
  )
}

function Links(props: { links?: PortfolioLink[] }) {
  return (
    <div
      className={styles.leftBar}
    >
      <div
        className={styles.linksDiv}
      >
        {
          props.links?.map((el, i) => {
            return (
              <motion.div
                key={el.href}
                initial={{
                  opacity: 0,
                  x: 10,
                }}
                animate={{
                  opacity: 1,
                  transition: {
                    delay: 0.3 + i * 0.1,
                    duration: .5,
                    ease: "easeOut",
                  },
                  x: 0,
                }}
              >
                <a key={el.href} href={el.href} target="_blank" rel="noopener noreferrer">

                  <div className={styles.linkDiv}>
                    {el.type === "Demo" &&
                      <>
                        <MousePointerSquare strokeWidth={1} />
                        <span>Go to demo site</span>
                      </>
                    }
                    {el.type === "Code" && (
                      <>
                        <Github strokeWidth={1} />
                        <span>Github repository</span>
                      </>
                    )
                    }
                    {el.type === "Live" &&
                      <>
                        <AppWindow strokeWidth={1} />
                        <span>Go to live site</span>
                      </>
                    }

                  </div>
                </a>
              </motion.div>
            )
          })
        }
      </div>
    </div>
  )
}

function Tags(props: { tags?: string[] }) {
  return (
    <div className={styles.tags}>
      {
        props.tags?.map(el => (
          <span key={el}>{el}</span>
        ))
      }
    </div>
  )
}


function Loader() {
  return (
    <motion.div
      key="article-loader"
      className={styles.loader}
      initial={{
        opacity: 0,
        y: 60,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: .25,
          ease: "easeOut",
        },
        y: 30,
      }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.4,
          ease: "easeOut",
          opacity: {
            duration: 0.3,
            ease: "linear",
          },
        },
      }}
    >
      <div className={styles.progressBar} />
    </motion.div>
  )
}
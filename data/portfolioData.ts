/* eslint-disable */
/** disable eslint for this file to maintain order of data */

export type PortfolioLink = {
  type: "Demo" | "Code" | "Live",
  href: string
}

export type Portfolio = {
  name: string,
  type: string,
  description: string,
  slug: string,
  content?: string,
  tags: string[],
  links: PortfolioLink[]
}

export const portfolios: Portfolio[] = [
  {
    name: "Lobi",
    type: "Full Stack Web",
    description: "A badminton game facilitation site with Nextjs and Bun",
    slug: "lobi",
    tags: ["React", "Typescript", "Nextjs", "Bunjs", "Honojs", "MongoDB", "Framer motion", "Jotai", "Sass", "CSS Modules", "shadcn", "Tailwind", "Zod", "Python"],
    links: [
      {
        type: "Demo",
        href: "https://lobi.jonaswong.dev",
      },
      {
        type: "Code",
        href: "https://github.com/jns-w/lobi",
      }
    ],
    content: ``
  },
  {
    name: "Menu'd",
    type: "Full Stack Web (mobile)",
    description: "Mobile first web menu app with React and Golang",
    slug: "menud",
    tags: ["Golang", "Gin", "PostgresSQL", "React", "React Router", "Vite", "Sass"],
    links: [
      {
        type: "Demo",
        href: "https://menud.jonaswong.dev",
      },
      {
        type: "Code",
        href: "https://github.com/jns-w/menud",
      },
    ],
    content: ``
  },
  {
    name: "Nothing To Do",
    description: "Minimalist interactive to do app with React Native",
    type: "Mobile App",
    slug: "nothing-to-do",
    tags: ["React-native", "Typescript", "Expo", "RN-Reanimated", "RN-Gesture-Handler", "Jotai", "Immer"],
    links: [
      {
        type: "Code",
        href: "https://github.com/jns-w/nothing-to-do",
      },
    ],
    content: ``
  },
  {
    name: "Blocks",
    description: "Timer app that syncs across devices with React and Nodejs",
    type: "Full Stack Web",
    slug: "blocks",
    tags: ["React", "Typescript", "Nextjs",  "Nodejs", "Express", "MongoDB", "Mongoose", "SocketIO", "Auth", "JWT", "Styled-components",  "Jotai"],
    links: [
      {
        type: "Demo",
        href: "https://blocks.jonaswong.dev",
      },
      {
        type: "Code",
        href: "https://github.com/jns-w/blocks",
      },
      {
        type: "Live",
        href: "https://blocks.wldspace.com"
      }
    ],
    content: ``
  },
  {
    name: "NotGPT",
    description: "Rust in-memory autocomplete implementation with Actix and React.",
    type: "Full Stack Web",
    slug: "notgpt",
    tags: ["Rust", "Actix", "React", "Typescript", "Vite", "Framer motion", "Jotai", "Sass"],
    links: [
      {
        type: "Demo",
        href: "https://notgpt.jonaswong.dev"
      },
      {
        type: "Code",
        href: "https://github.com/jns-w/notgpt",
      },
    ],
    content: ``
  },
  {
    name: "Devsite",
    description: "This portfolio site 🙂",
    slug: "devsite",
    type: "Frontend Web",
    tags: ["Typescript", "React", "ThreeJS", "React Three Fibre", "Sass"],
    links: [
      {
        type: "Live",
        href: "https://jonaswong.dev"
      },
      {
        type: "Code",
        href: "https://github.com/jns-w/devsite",
      },
    ],
    content: ""
  },
]

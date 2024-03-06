# Lobi, a Badminton Game Facilitator Site
Github: [github.com/jns-w/lobi](https://github.com/jns-w/lobi)\
Demo site: [lobi.jonaswong.dev](https://lobi.jonaswong.dev)
![](https://res.cloudinary.com/ds1s8ilcc/image/upload/v1706944793/Devsite/lobi/Lobi-main_nisnmv.png)
> #### Frontend Stack:
> - React
> - Next.js
> - Jotai
> - Sass, CSS modules, shadcn, Tailwind
> - Framer motion
> - Zod
> #### Backend Stack:
> - Bun
> - MongoDB with Node Driver
# 
The badminton scene is a lively one in Singapore, with thousands of games being played monthly. And players don’t just play with friends, they organise sessions with strangers, setting up networks to meet new opponents. These networks are spread thin into pockets of groups, using a wide variety of sites and apps, i.e. Facebook groups, meet-up groups, WhatsApp, Telegram.\
\
Game organisers have to broadcast game information to all channels at their disposal, often resorting to spam to get prospects. Players looking for games have a cumbersome experience of first joining various networks and group chats, and then being on a constant lookout for upcoming games. Filtering through vast amount of redundant data, before landing on a potential game, if the position has not been filled that is.
## Goals
The goal of this project is to resolve the pain points of both game organisers and game seekers, by consolidating game details into standards, allowing for simple and straight to the point searches. Eliminating the need for organisers to spam, and game seekers to sieve through networks all day.
// image of home page
// image of search bar

## Handling data inputs
There are 3 main data category that players consider when looking for games, **datetime, location and skill level.**
// image of input
For handling these inputs, there exists a multitude of excellent ui libraries out there, and there is no need to reinvent the wheel. I wanted something that was elegant to implement, and yet retain full control over the styling and behavior. So shadcn's [ui component collection](https://ui.shadcn.com) is perfect for this.
// show shadcn's calendar, dropdown, combo

## Game details
The games that are available games are displayed in a card format like a bulletin board. In each card we display the most important details being the datetime, location and skill levels, and a host contact button that saves the host's contact details to the user's clipboard.
// show game cards

## Backend
For the backend I am using the exciting new runtime [Bun](https://bun.sh/). It is compatible with most Node.js libraries, so adapting to it was no issue at all. API routing is done via [hono](https://hono.dev), using MongoDB as the database.

### MongoDB, with no ORMs
Having used Mongoose for my other project, [Blocks](/article/blocks), I wanted to challenge myself this time around and use the native driver instead of relying on an external ORM library. With less abstraction, it should also result in less server overhead, and faster searches. \
// show custom game projection and lookups \
Thank you for reading! If you'd like to see more, check out my next project [Menu'd](/article/menud) where I built an app-like web page using react and pure css.

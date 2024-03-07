# Lobi, a Badminton Game Facilitator Site
Github: [github.com/jns-w/lobi](https://github.com/jns-w/lobi)\
Demo site: [lobi.jonaswong.dev](https://lobi.jonaswong.dev)
![](https://res.cloudinary.com/ds1s8ilcc/image/upload/v1706944793/Devsite/lobi/Lobi-main_nisnmv.png)

Lobi is a web application that aims to simplify the process of organizing and finding badminton games in Singapore. It serves as a centralized platform for both game organizers and players, eliminating the need for scattered communication channels and redundant data.

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
## The problem
The badminton scene in Singapore is thriving, with thousands of games played monthly. However, organizers and players face several challenges:
> - **Organizers** have to broadcast game information across various channels like Facebook groups, WhatsApp, and Telegram, often resorting to spamming to reach potential participants.
> - **Players** must join multiple networks and group chats, constantly sifting through redundant data to find suitable games.
This cumbersome process leads to frustration and inefficiency for both parties.
## Goal
Lobi aims to resolve these pain points by consolidating game details into a standardized format, allowing for simple and straightforward searches. By providing a centralized platform, Lobi eliminates the need for organizers to spam and enables players to easily find games that match their preferences.
// image of home page
// image of search bar

## Intuitive search filters
The key factors players consider when looking for games are date and time, location, and skill level. Lobi offers a seamless search experience by incorporating intuitive filters for these criteria.
Leveraging shadcn's elegant UI component collection, Lobi integrates a calendar, dropdown menus, and combo boxes, allowing users to effortlessly specify their desired game parameters.
// show shadcn's calendar, dropdown, combo

## Game details at a glance
Available games are displayed in a card format, akin to a bulletin board. Each card prominently showcases the essential details: date and time, location, and skill levels. Users can quickly identify suitable games and easily copy the host's contact information with a single click.

## Backend
On the backend, Lobi utilizes the cutting-edge [Bun](https://bun.sh/ runtime, which is compatible with most Node.js libraries while offering improved performance and reduced overhead. API routing is handled by [hono](https://hono.dev, and MongoDB serves as the database.

### Embracing the Native MongoDB Driver
Unlike Lobi's previous project, Blocks, where the Mongoose ORM was used, this time around, the native MongoDB driver is employed. By working directly with the driver, Lobi achieves faster searches and reduced server overhead due to less abstraction.

// show custom game projection and lookups \
Thank you for reading! If you'd like to see more, check out my next project [Menu'd](/article/menud) where I built an app-like web page using react and pure css.

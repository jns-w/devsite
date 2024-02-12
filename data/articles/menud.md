# Menu'd, a Mobile-first Web Menu Interface
Github: [github.com/jns-w/menud](https://github.com/jns-w/menud)\
Demo site: [menud.jonaswong.dev](https://menud.jonaswong.dev)
![](https://images.unsplash.com/photo-1548679847-1d4ff48016c7?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)
> #### Frontend Stack:
> - React
> - Vite
> - Sass
> #### Backend Stack:
> - Golang
> - Gin
> - PostgresSQL
## 
Using a digital menu in a restaurant can be a really varied experience for customers. These websites are often designed as typical web pages refitted into mobile, layouts are confusing and buttons are tiny. Whenever I’m using them, **I find myself missing the seamless experience I have in my mobile apps.**
### Goals
So my goal for this project is to have a more **app-like experience on a mobile browser**:
>- big touch points for site navigation
>- seamless page transitions, for better route sensing
>- reactive UI for conditional components i.e. carts, cart item counts
#### pictures of UI
## Database design structure
Menu data is served using a golang server, with PostgresSQL as the database of choice. I have chosen to keep this simple, and not use any abstracted ORMs, opting for [SQLx](https://github.com/launchbadge/sqlx#).\
Designed for the long term, the data is separated into tiers, and joined via IDs when being fetched; allowing reusability and adjustments to the menu in the future.
### Models
![Menu'd Models](https://res.cloudinary.com/ds1s8ilcc/image/upload/v1706846307/Devsite/menu-d/menud-models_mo73h7.png)
Thank you for reading! If you're interested, do check out my next project [Nothing To Do](/article/nothing-to-do), built in react-native.

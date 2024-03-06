# Menu'd, a Mobile-first Web Menu Interface
Github: [github.com/jns-w/menud](https://github.com/jns-w/menud)\
Demo site: [menud.jonaswong.dev](https://menud.jonaswong.dev)
![](https://res.cloudinary.com/ds1s8ilcc/image/upload/v1709716896/Devsite/menu-d/Menud-main_er3jpg.png)
> #### Frontend Stack:
> - React
> - Vite
> - Sass
> #### Backend Stack:
> - Golang
> - Gin
> - PostgresSQL
## 
Using a digital menu in a restaurant can be a really varied experience for customers. These websites are often designed as typical web pages refitted into mobile, layouts can be confusing and buttons tiny. Whenever I’m using them, **I find myself missing the seamless experience I have in my mobile apps.**

### Goals
So my goal for this project is to create a website that has an **app-like experience on a mobile browser**:
>#### Design requirements
> - big touch points for site navigation
> - seamless page transitions, that allows for better route sensing for the user
> - reactive UI for conditional components i.e. carts, item counts

![](https://res.cloudinary.com/ds1s8ilcc/image/upload/v1709715461/Devsite/menu-d/menud-card01_tfvxul.png)
![](https://res.cloudinary.com/ds1s8ilcc/image/upload/v1709715462/Devsite/menu-d/menud-cart01_tbv4vr.png)
![](https://res.cloudinary.com/ds1s8ilcc/image/upload/v1709715463/Devsite/menu-d/menud-cart02_mdrt5y.png)
![](https://res.cloudinary.com/ds1s8ilcc/image/upload/v1709715464/Devsite/menu-d/menud-order-placed01_jkfh9f.png)

![](https://res.cloudinary.com/ds1s8ilcc/image/upload/v1709713276/Devsite/menu-d/menud-comp2_dbmopr.gif)

Set your browser to mobile mode and go to the [demo](https://menud.jonaswong.dev) to experience it!

## Database design structure
Menu data is served using a golang server, with PostgresSQL as the database of choice. I have chosen to keep this simple, and not use any abstracted ORMs, opting for [SQLx](https://github.com/launchbadge/sqlx#).\
\
Designed for the long term, the menu's data is separated into categories, and joined via IDs when being fetched; allowing reusability and adjustments to the menu in the future.

### Models
![Menu'd Models](https://res.cloudinary.com/ds1s8ilcc/image/upload/v1706846307/Devsite/menu-d/menud-models_mo73h7.png)
Thank you for reading! If you're interested, do check out my next project [Nothing To Do](/article/nothing-to-do), built in react-native.

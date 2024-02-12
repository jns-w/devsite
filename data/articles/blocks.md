# Blocks, Real-time Timer App to Help Focus Flow
Github: [https://github.com/jns-w/blocks](https://github.com/jns-w/blocks)\
Demo site: [https://blocks.jonaswong.dev](https://blocks.jonaswong.dev)\
Live site: [https://blocks.wldspace.com](https://blocks.wldspace.com)\
![](https://res.cloudinary.com/ds1s8ilcc/image/upload/v1706939451/Devsite/blocks/Blocks-main_x9qoss.png)
> #### Frontend Stack:
> - React, Nextjs
> - Styled-components
> - Jotai
> #### Backend Stack:
> - Nodejs
> - Express
> - MongoDB
> - JWT
> #### Real-time stack:
> - Socket.IO
# 
In our world where countless corporation and people are trying to grab our attention, it can be hard to stay focused on our work. It is therefore nice to have a time tracking tool at our disposal to keep track of our focused hours, to see how we're doing daily.
While there are many time tracking apps available in the market, I realised that there isn't a lot of them that has real-time multi-device features, at least not the free to use ones.. so, I decided to create my own.
## Goals
The goal of this project is simple, have a time tracker app that can track activities, categorised into projects, and allow for an overview to see how you've spent your time so far. Lastly it has to be real-time, and one should be able to use this app concurrently on multiple devices and browsers. Moving away from your computer, one should be able to continue tracking on their mobile devices as well.
## Socket.IO
I've chosen to use [socket.io](https://socket.io) to implement websockets for the real-time feature of the app, as it is a well-developed, well-documented library with a large community of users.
### show socket in action
### show timer input, project input
### show overview
Thank you for reading, if you'd like to see more of my projects, check out [NotGPT](/article/notgpt) to see my implementation of Google Search's autocompletion feature, done in Rustlang.

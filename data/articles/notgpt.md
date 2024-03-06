# NotGPT, Rust In-memory Autocomplete Implementation
Github: [https://github.com/jns-w/notgpt](https://github.com/jns-w/notgpt)\
Demo site: [https://notgpt.jonaswong.dev](https://notgpt.jonaswong.dev)
![](https://res.cloudinary.com/ds1s8ilcc/image/upload/v1706968350/Devsite/notgpt/Notgpt-main_p98wko.png)
> #### Backend Stack:
> - Rust
> - Actix
> #### Frontend Stack:
> - React, Vite
> - Framer Motion
> - Jotai
> - Sass
# 
While I was studying algorithms I came across a great deal of cool data structures that are very satisfying to implement. However after a while, it dawned on me that I'm just repeatedly using them in sandboxed environments, solving leetcode mind teasers, and it just didn't feel right leaving them in the coding playground. So I began wondering how do i apply some of them to real life problems?
## Goals
The goal of this project is to apply an algorithmic concept to solve a real life problem. And I decided to put myself in the shoes of a Google engineer (in their founding years) trying to solve for auto-completion suggestions on their search bar, from scratch.
\
\
On the frontend, we can just create a simple search bar to execute the concept, and then in the backend we need to run a low-level language to power the auto-completions efficiently.

## Rustlang for backend
The multi-year voted favourite language, Rustlang is touted to be blazingly fast and performant. It also has great libraries for serving APIs like [Actix](https://actix.rs/). Coupled with the fact that I've always wanted to try it, I decided to give it a go.
### In-memory database
Running a low-level language like rust is excellent for performance, but if I am accessing the suggestion strings via a storage database, all that performance is going to be bottlenecked at the database access anyway, which would defeat the purpose of this project.
To optimise for performance, I had to create an in-memory database.
### Prefix Trie
The trie is the perfect algorithm to solve for this problem, this data structure is probably one of the most efficient ways to search for prefixes, and with some extra work, it is also possible to store additional data like search counts, to sort through results.
#### image of trie implementation
## Client
#### image of search bar in action
> #### Possible improvements to the project
> - Periodic snapshots to store trie into storage
> - Trending suggestions feature
### 
Thank you for reading! To see my other works, do check out my portfolio [here](/#Portfolio).

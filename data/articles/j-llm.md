# J-LLM: A Full-Stack LLM Query Stream Application

Client Github: [github.com/jns-w/jllm-client](https://github.com/jns-w/jllm-client)\
Server Github: [github.com/jns-w/jllm-server](https://github.com/jns-w/jllm-server)\
Demo site: [jllm.jonaswong.dev](https://jllm.jonaswong.dev)
![](https://res.cloudinary.com/ds1s8ilcc/image/upload/v1736856822/Devsite/j-llm/CleanShot_2025-01-14_at_20.11.37_u6ukpl.png)

J-LLM is a full-stack web application created to manage streaming data from a backend server to the frontend. The backend connects to OpenAI's 4o Mini API to generate responses to user queries. The frontend is a simple React app that sends requests to the backend and displays the responses in a chat-like interface via streaming.

> #### Backend Stack:
> - Bun.js
> - Hono
> - OpenRouter - OpenAI API (ChatGPT 4o Mini)
> #### Frontend Stack:
> - React
> - Next.js
> - Sass, CSS modules, Tailwind
> - Motion

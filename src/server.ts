import fastify from "fastify"

import { env } from "./shared/env/environments"

const app = fastify()

app.get("/hello", () => {
  return "hello world"
})

app
  .listen({
    port: env.DB_PORT,
  })
  .then(() => {
    console.log("HTTP sercer running!")
  })

export default app

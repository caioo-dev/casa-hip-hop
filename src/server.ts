import fastify from "fastify"

import { env } from "./shared/env/environments"
import { appRoutes } from "./shared/Routes/app.routes"

const app = fastify()

app.get("/hello", () => {
  return "hello world"
})

app.register(appRoutes)

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log("HTTP sercer running!")
  })

export default app

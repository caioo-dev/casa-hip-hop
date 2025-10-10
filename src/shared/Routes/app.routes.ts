import type { FastifyInstance } from "fastify"
import { usersRoutes } from "../../Domains/Users/Infra/Routes/users.routes"

export async function appRoutes(server: FastifyInstance) {
  server.get("/hello", async (req, res) => {
    return res.send("Hello World!")
  })
  server.register(usersRoutes, { prefix: "/users" })
}

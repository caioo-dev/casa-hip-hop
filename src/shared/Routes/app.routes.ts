import type { FastifyInstance } from "fastify"
import { usersRoutes } from "../../Domains/Users/Infra/Routes/users.routes"
import { authRoutes } from "../../Domains/Users/Infra/Routes/auth.routes"

export async function appRoutes(server: FastifyInstance) {
  server.register(usersRoutes, { prefix: "/users" })
  server.register(authRoutes, { prefix: "/login" })
}

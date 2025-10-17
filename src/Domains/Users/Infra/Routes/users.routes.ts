import type { FastifyInstance } from "fastify"
import { createUser } from "../Controllers/users.controller"

export async function usersRoutes(app: FastifyInstance) {
  app.post("/", createUser)
}

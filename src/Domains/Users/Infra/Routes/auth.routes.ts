import type { FastifyInstance } from "fastify"
import { login } from "../Controllers/auth.controller"

export async function authRoutes(app: FastifyInstance) {
  app.post("/", login)
}

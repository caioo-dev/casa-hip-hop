import type { FastifyReply, FastifyRequest } from "fastify"

import { z } from "zod"
import { makeLogin } from "../../Use-cases/Factories/make-login"

export async function login(request: FastifyRequest, reply: FastifyReply) {
  const authSchema = z.object({
    email: z.string(),
    password: z.string(),
  })

  const { email, password } = authSchema.parse(request.body)
  3123
  const auth = makeLogin()

  const data = await auth.execute({ email, password })

  return reply.status(200).send(data)
}

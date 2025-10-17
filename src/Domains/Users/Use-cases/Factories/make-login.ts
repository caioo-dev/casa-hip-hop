import { Login } from "../login"
import { UsersRepository } from "../../Repositories/knex/users.repository"

export function makeLogin() {
  const usersRepository = new UsersRepository()
  const login = new Login(usersRepository)

  return login
}

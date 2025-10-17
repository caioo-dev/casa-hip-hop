import { connection } from "../../../../config/database"
import type { IUserRequestDTO } from "../../Dtos/user/user-request.dto"
import type { IUserResponseDTO } from "../../Dtos/user/user-response.dto"
import type { IUsersRepository } from "../users.interface"

export class UsersRepository implements IUsersRepository {
  async create(user: IUserRequestDTO): Promise<void> {
    await connection
      .insert({
        name: user.name,
        email: user.email,
      })
      .into("users")
  }

  async getByEmail(email: string): Promise<IUserResponseDTO | null> {
    const user = await connection
      .select("*")
      .from("users")
      .where("email", email)
      .first()
    return user
  }
}

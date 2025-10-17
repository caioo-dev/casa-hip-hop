import { generateHash } from "../../../shared/utils/encrypt"
import type { IUserRequestDTO } from "../Dtos/user/user-request.dto"
import type { IUsersRepository } from "../Repositories/users.interface"

export class CreateUser {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(user: IUserRequestDTO): Promise<void> {
    const userExists = await this.usersRepository.getByEmail(user.email)

    if (userExists) {
      throw new Error("User already exists")
    }

    if (!user.password) {
      throw new Error("Password is required")
    }

    const hashedPassword = await generateHash(user.password)

    Object.assign(user, { password: hashedPassword })

    await this.usersRepository.create(user)
  }
}

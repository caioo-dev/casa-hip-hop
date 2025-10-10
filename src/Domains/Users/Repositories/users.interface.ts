import type { IUserDTO } from "../Dtos/user.dto"

export interface IUsersRepository {
  create(user: IUserDTO): Promise<void>
  getByEmail(email: string): Promise<IUserDTO | null>
}

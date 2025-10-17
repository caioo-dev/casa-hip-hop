import type { IUserRequestDTO } from "../Dtos/user/user-request.dto"
import type { IUserResponseDTO } from "../Dtos/user/user-response.dto"

export interface IUsersRepository {
  create(user: IUserRequestDTO): Promise<void>
  getByEmail(email: string): Promise<IUserResponseDTO | null>
}

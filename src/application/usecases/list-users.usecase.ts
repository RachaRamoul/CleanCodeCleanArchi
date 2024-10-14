import { User } from '../../domain/entities/user.entity';
import { IUserRepository } from '../repositories/user.repository';

export class ListUsersUseCase {
  constructor(private repository: IUserRepository) {}

  async execute(): Promise<User[]> {
    return await this.repository.listUsers();
  }
}

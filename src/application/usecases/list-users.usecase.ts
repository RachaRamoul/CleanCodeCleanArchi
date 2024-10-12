import { User } from '../../domain/entities/user.entity';
import { UserRepository } from '../repositories/user.repository';

export class ListUsersUseCase {
  constructor(private repository: UserRepository) {}

  async execute(): Promise<User[]> {
    return await this.repository.listUsers();
  }
}

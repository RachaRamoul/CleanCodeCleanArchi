import { UserRepository } from '../repositories/user.repository';
import { User } from '../../domain/entities/user.entity';

export class AddUserUseCase {
  constructor(private repository: UserRepository) {}

  async execute(firstName: string, lastName: string): Promise<void> {
    const user = new User(Date.now().toString(), firstName, lastName);
    await this.repository.addUser(user);
  }
}

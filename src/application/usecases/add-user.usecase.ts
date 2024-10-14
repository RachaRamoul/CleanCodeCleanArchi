import { IUserRepository } from '../repositories/user.repository';
import { User } from '../../domain/entities/user.entity';
export class AddUserUseCase {
  constructor(private repository: IUserRepository) {}

  async execute(firstName: string, lastName: string): Promise<void> {
    const user = new User('', firstName, lastName);
    await this.repository.save(user);
  }
}

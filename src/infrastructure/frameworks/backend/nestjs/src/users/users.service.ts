import { Injectable } from '@nestjs/common';
import { ListUsersUseCase } from '../../../../../../application/usecases/list-users.usecase';
import { AddUserUseCase } from '../../../../../../application/usecases/add-user.usecase';
import { repositories } from '../../../../../database/config/repository.config';

@Injectable()
export class UsersService {
  private addUserUseCase: AddUserUseCase;
  private listUsersUseCase: ListUsersUseCase;

  constructor() {
    const { UserRepository } = repositories();
    const userRepository = new UserRepository();
    this.addUserUseCase = new AddUserUseCase(userRepository);
    this.listUsersUseCase = new ListUsersUseCase(userRepository);
  }

  async addUser(firstName: string, lastName: string) {
    await this.addUserUseCase.execute(firstName, lastName);
    return { message: 'User added' };
  }

  async listUsers() {
    return await this.listUsersUseCase.execute();
  }
}

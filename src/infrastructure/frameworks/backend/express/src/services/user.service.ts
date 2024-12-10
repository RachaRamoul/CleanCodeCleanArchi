import { AddUserUseCase } from '../../../../../../application/usecases/add-user.usecase';
import { ListUsersUseCase } from '../../../../../../application/usecases/list-users.usecase';
import { repositories } from '../../../../../database/config/repository.config';

const { UserRepository } = repositories();
const userRepository = new UserRepository();

export class UserService {
  private addUserUseCase: AddUserUseCase;
  private listUsersUseCase: ListUsersUseCase;

  constructor() {
    this.addUserUseCase = new AddUserUseCase(userRepository);
    this.listUsersUseCase = new ListUsersUseCase(userRepository);
  }

  async addUser(firstName: string, lastName: string): Promise<void> {
    await this.addUserUseCase.execute(firstName, lastName);
  }

  async listUsers(): Promise<any[]> {
    return await this.listUsersUseCase.execute();
  }
}

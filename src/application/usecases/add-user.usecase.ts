import { IUserRepository } from '../repositories/user.repository';
import { User } from '../../domain/entities/user.entity';

export class AddUserUseCase {
  constructor(private repository: IUserRepository) {}

  async execute(
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    siretNumber: string,
    companyName: string,
    password: string  // Ajout du mot de passe
  ): Promise<User> {
    // Validation ou hashage du mot de passe peut être fait ici si nécessaire
    const user = new User('', firstName, lastName, email, phoneNumber, siretNumber, companyName, password);
    return this.repository.save(user);
  }
}

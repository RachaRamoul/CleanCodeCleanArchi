import { User } from '../../domain/entities/user.entity';

export interface IUserRepository {
  findById(id: string): Promise<User | null>;
  save(user: User): Promise<User>;
  listUsers(): Promise<User[]>;
  removeUser(id: string): Promise<void>;
}

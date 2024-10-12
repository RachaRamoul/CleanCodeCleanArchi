import { User } from '../../domain/entities/user.entity';

export interface UserRepository {
  addUser(user: User): Promise<void>;
  listUsers(): Promise<User[]>;
  removeUser(id: string): Promise<void>;
}

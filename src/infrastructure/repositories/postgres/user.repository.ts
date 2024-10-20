import { User } from '../../../domain/entities/user.entity';
import { UserPostgresEntity } from '../../persistence/entities/user.entity-postgres';
import { UserMapper } from '../../persistence/mappers/user.mapper-postgres';
import { AppDataSource } from '../../config/database.config';
import { IUserRepository } from '../../../application/repositories/user.repository';

export class PostgresUserRepository implements IUserRepository {
  private userRepository = AppDataSource.getRepository(UserPostgresEntity);

  async findById(id: string): Promise<User | null> {
    const userEntity = await this.userRepository.findOneBy({ id });
    return userEntity ? UserMapper.toDomain(userEntity) : null;
  }

  async save(user: User): Promise<User> {
    const userEntity = UserMapper.toModel(user);
    const savedUserEntity = await this.userRepository.save(userEntity);
    return UserMapper.toDomain(savedUserEntity);
  }

  async listUsers(): Promise<User[]> {
    const userEntities = await this.userRepository.find();
    return userEntities.map((userEntity) => UserMapper.toDomain(userEntity));
  }

  async removeUser(id: string): Promise<void> {
    await this.userRepository.delete({ id });
  }
}

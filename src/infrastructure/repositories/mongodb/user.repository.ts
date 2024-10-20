import { User } from '../../../domain/entities/user.entity';
import { UserEntity } from '../../persistence/entities/user.entity-persistence';
import { UserMapper } from '../../persistence/mappers/user.mapper';
import { AppDataSource } from '../../config/database.config';
import { IUserRepository } from '../../../application/repositories/user.repository';
import { ObjectId } from 'mongodb';

export class MongoUserRepository implements IUserRepository {
  private userRepository = AppDataSource.getMongoRepository(UserEntity);

  async findById(id: string): Promise<User | null> {
    const userEntity = await this.userRepository.findOne({ where: { _id: new ObjectId(id) } });
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
    await this.userRepository.deleteOne({ _id: new ObjectId(id) });
  }
}

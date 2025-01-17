import { User } from '../../../../domain/entities/user.entity';
import { UserModel } from '../persistence/entities/user.entity-mongodb'; 
import { UserMapper } from '../persistence/mappers/user.mapper-mongodb'; 
import { IUserRepository } from '../../../../application/repositories/user.repository';
import { ObjectId } from 'mongodb';

export class MongoUserRepository implements IUserRepository {

  async findById(id: string): Promise<User | null> {
    const userEntity = await UserModel.findOne({ _id: new ObjectId(id) });
    return userEntity ? UserMapper.toDomain(userEntity) : null;
  }

  async save(user: User): Promise<User> {
    const userEntity = UserMapper.toModel(user);
    const savedUserEntity = await userEntity.save();
    return UserMapper.toDomain(savedUserEntity);
  }

  async listUsers(): Promise<User[]> {
    const userEntities = await UserModel.find();
    return userEntities.map((userEntity) => UserMapper.toDomain(userEntity));
  }

  async removeUser(id: string): Promise<void> {
    await UserModel.deleteOne({ _id: new ObjectId(id) });
  }
}

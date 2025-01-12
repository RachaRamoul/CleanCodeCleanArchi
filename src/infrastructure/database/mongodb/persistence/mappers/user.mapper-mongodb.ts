import { User } from '../../../../../domain/entities/user.entity';
import { IUser, UserModel } from '../entities/user.entity-mongodb';

export class UserMapper {
  static toDomain(userEntity: IUser): User {
    return new User(userEntity._id.toString(), userEntity.firstName, userEntity.lastName);
  }

  static toModel(user: User): IUser {
    return new UserModel(user);
  }
}

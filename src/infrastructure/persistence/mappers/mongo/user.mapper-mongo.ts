import { User } from '../../../../domain/entities/user.entity';
import { UserMongoEntity } from '../../entities/mongo/user.entity-mongo';

export class UserMapper {
  static toDomain(userEntity: UserMongoEntity): User {
    return new User(userEntity.id, userEntity.firstName, userEntity.lastName);
  }

  static toModel(user: User): UserMongoEntity {
    const userEntity = new UserMongoEntity();
    userEntity.firstName = user.firstName;
    userEntity.lastName = user.lastName;
    return userEntity;
  }
}

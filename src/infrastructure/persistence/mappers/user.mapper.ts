import { User } from '../../../domain/entities/user.entity';
import { UserEntity } from '../entities/user.entity-persistence';

export class UserMapper {
  static toDomain(userEntity: UserEntity): User {
    return new User(userEntity.id, userEntity.firstName, userEntity.lastName);
  }

  static toModel(user: User): UserEntity {
    const userEntity = new UserEntity();
    userEntity.firstName = user.firstName;
    userEntity.lastName = user.lastName;
    return userEntity;
  }
}

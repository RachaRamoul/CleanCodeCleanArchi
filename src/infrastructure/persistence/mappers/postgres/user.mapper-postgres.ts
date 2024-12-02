import { User } from '../../../../domain/entities/user.entity';
import { UserPostgresEntity } from '../../entities/postgres/user.entity-postgres';

export class UserMapper {
  static toDomain(userEntity: UserPostgresEntity): User {
    return new User(userEntity.id, userEntity.firstName, userEntity.lastName);
  }

  static toModel(user: User): UserPostgresEntity {
    const userEntity = new UserPostgresEntity();
    userEntity.firstName = user.firstName;
    userEntity.lastName = user.lastName;
    return userEntity;
  }
}

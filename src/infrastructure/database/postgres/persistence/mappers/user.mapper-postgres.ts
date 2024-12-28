import { User } from '../../../../../domain/entities/user.entity';
import UserPostgresEntity  from '../entities/user.entity-postgres';

export class UserMapper {
  static toDomain(userEntity: UserPostgresEntity): User {
    return new User(userEntity.id, userEntity.firstName, userEntity.lastName);
  }

  static toModel(user: User): Partial<UserPostgresEntity> {
    return new UserPostgresEntity({
      firstName: user.firstName, 
      lastName: user.lastName
    });
  }
}

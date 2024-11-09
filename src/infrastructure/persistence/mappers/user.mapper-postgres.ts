// src/infrastructure/persistence/mappers/user.mapper-postgres.ts
import { User } from '../../../domain/entities/user.entity';
import { UserPostgresEntity } from '../entities/user.entity-postgres';

export class UserMapper {
  static toDomain(userEntity: UserPostgresEntity): User {
    return new User(
      userEntity.id, 
      userEntity.firstName, 
      userEntity.lastName, 
      userEntity.email, 
      userEntity.phoneNumber, 
      userEntity.siretNumber, 
      userEntity.companyName
    );
  }

  static toModel(user: User): UserPostgresEntity {
    const userEntity = new UserPostgresEntity();
    userEntity.firstName = user.firstName;
    userEntity.lastName = user.lastName;
    userEntity.email = user.email;
    userEntity.phoneNumber = user.phoneNumber;
    userEntity.siretNumber = user.siretNumber;
    userEntity.companyName = user.companyName;
    return userEntity;
  }
}

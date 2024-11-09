// src/infrastructure/persistence/mappers/user.mapper-mongo.ts
import { User } from '../../../domain/entities/user.entity';
import { UserMongoEntity } from '../entities/user.entity-mongo';

export class UserMapper {
  static toDomain(userEntity: UserMongoEntity): User {
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

  static toModel(user: User): UserMongoEntity {
    const userEntity = new UserMongoEntity();
    userEntity.firstName = user.firstName;
    userEntity.lastName = user.lastName;
    userEntity.email = user.email;
    userEntity.phoneNumber = user.phoneNumber;
    userEntity.siretNumber = user.siretNumber;
    userEntity.companyName = user.companyName;
    return userEntity;
  }
}

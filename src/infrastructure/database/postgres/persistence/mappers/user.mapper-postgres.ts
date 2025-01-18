import { User } from '../../../../../domain/entities/user.entity';
import UserPostgresEntity from '../entities/user.entity-postgres';

export class UserMapper {
  static toDomain(userEntity: UserPostgresEntity): User {
    return new User(
      userEntity.userId,       
      userEntity.nom,           
      userEntity.prenom,        
      userEntity.email,         
      userEntity.telephone,     
      userEntity.numeroSiret,  
      userEntity.type,         
      userEntity.password       
    );
  }

  static toModel(user: User): Partial<UserPostgresEntity> {
    return new UserPostgresEntity({
      company_Id: user.company_Id,
      nom: user.nom,
      prenom: user.prenom,
      email: user.email,
      password: user.password,
      telephone: user.telephone,
      numeroSiret: user.numeroSiret,
      type: user.type
    });
  }
}

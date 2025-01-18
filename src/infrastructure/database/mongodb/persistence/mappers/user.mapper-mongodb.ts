import { User } from '../../../../../domain/entities/user.entity';
import { IUser, UserModel } from '../entities/user.entity-mongodb';

export class UserMapper {
  static toDomain(userEntity: IUser): User {
    return new User(
      userEntity.companyId,      
      userEntity.firstName,      
      userEntity.lastName,      
      userEntity.email,         
      userEntity.phone,          
      userEntity.siretNumber,    
      userEntity.type,            
      userEntity.password
    );
  }

  static toModel(user: User): IUser {
    return {
      companyId: user.company_Id,
      firstName: user.nom,
      lastName: user.prenom,
      email: user.email,
      phone: user.telephone,
      siretNumber: user.numeroSiret,
      type: user.type,
      password: user.password 
    } as IUser;
  }
}

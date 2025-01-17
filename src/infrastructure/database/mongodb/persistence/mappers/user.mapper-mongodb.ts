import { User } from '../../../../../domain/entities/user.entity';
import { IUser, UserModel } from '../entities/user.entity-mongodb';

export class UserMapper {
  // Conversion d'un utilisateur depuis la base de données (Mongoose) vers le domaine
  static toDomain(userEntity: IUser): User {
    return new User(
      userEntity.companyId,      // companyId
      userEntity.firstName,      // firstName
      userEntity.lastName,       // lastName
      userEntity.email,          // email
      userEntity.phone,          // phone
      userEntity.siretNumber,    // siretNumber
      userEntity.type,            // type (Livreur, Location, etc.)
      userEntity.password
    );
  }

  // Conversion d'un utilisateur du domaine vers un modèle Mongoose (mais sans instancier UserModel directement)
  static toModel(user: User): IUser {
    // Nous utilisons simplement un objet Mongoose au lieu de créer une nouvelle instance de UserModel
    return {
      companyId: user.company_Id,
      firstName: user.nom,
      lastName: user.prenom,
      email: user.email,
      phone: user.telephone,
      siretNumber: user.numeroSiret,
      type: user.type,
      password: user.password // Assurez-vous de transmettre le mot de passe (haché) ici si nécessaire
    } as IUser;
  }
}

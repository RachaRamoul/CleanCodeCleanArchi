import { User } from '../../../../../domain/entities/user.entity';
import UserPostgresEntity from '../entities/user.entity-postgres';

export class UserMapper {
  // Convertir une entité PostgreSQL en un domaine User
  static toDomain(userEntity: UserPostgresEntity): User {
    return new User(
      userEntity.userId,        // userId est le champ identifiant de l'entité PostgreSQL
      userEntity.nom,           // nom
      userEntity.prenom,        // prenom
      userEntity.email,         // email
      userEntity.telephone,     // telephone
      userEntity.numeroSiret,   // numeroSiret
      userEntity.type,          // type
      userEntity.password       // Ajout du mot de passe
    );
  }

  // Convertir un domaine User en une entité PostgreSQL
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

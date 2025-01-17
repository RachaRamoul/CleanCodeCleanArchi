import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import { User } from '../../../../../domain/entities/user.entity';
import bcrypt from 'bcrypt';

@Entity('users')
export default class UserPostgresEntity implements User {
  @PrimaryGeneratedColumn('uuid')
  userId!: string;

  @Column()
  company_Id!: string;    // Référence à l'entreprise

  @Column()
  nom!: string;           // Nom de l'utilisateur

  @Column()
  prenom!: string;        // Prénom de l'utilisateur

  @Column()
  email!: string;

  @Column()
  password!: string;      // Mot de passe de l'utilisateur

  @Column()
  telephone!: string;     // Numéro de téléphone de l'utilisateur

  @Column()
  numeroSiret!: string;   // Numéro SIRET de l'utilisateur

  @Column()
  type!: string;          // Type de l'utilisateur (Livreur, Location, etc.)

  // Hook avant l'insertion pour hacher le mot de passe
  @BeforeInsert()
  async hashPassword() {
    if (this.password) {
      this.password = await bcrypt.hash(this.password, 10); // Hachage du mot de passe
    }
  }

  constructor(partial?: Partial<UserPostgresEntity>) {
    if (partial) {
      Object.assign(this, partial);
    }
  }
}

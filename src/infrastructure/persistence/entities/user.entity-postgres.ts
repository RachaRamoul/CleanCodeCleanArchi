import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../../domain/entities/user.entity';

@Entity('users')
export class UserPostgresEntity implements User {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  firstName!: string;

  @Column()
  lastName!: string;

  @Column()
  email!: string;

  @Column()
  phoneNumber!: string;

  @Column()
  siretNumber!: string;

  @Column()
  companyName!: string;

  // Convertir l'entité Postgres en un objet de domaine User
  toDomain(): User {
    return new User(
      this.id,
      this.firstName,
      this.lastName,
      this.email,
      this.phoneNumber,
      this.siretNumber,
      this.companyName
    );
  }
}

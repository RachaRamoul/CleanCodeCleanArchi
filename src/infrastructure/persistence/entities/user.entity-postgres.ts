import { Entity, Column, PrimaryGeneratedColumn, ObjectIdColumn } from 'typeorm';
import { User } from '../../../domain/entities/user.entity';

@Entity('users')
export class UserPostgresEntity implements User {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  firstName!: string;

  @Column()
  lastName!: string;

  toDomain(): User {
    return new User(this.id, this.firstName, this.lastName);
  }
}

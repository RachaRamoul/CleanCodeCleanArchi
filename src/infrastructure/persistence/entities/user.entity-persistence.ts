import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../../domain/entities/user.entity';

@Entity('users')
export class UserEntity implements User {
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

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../../../../domain/entities/user.entity';

@Entity('users')
export default class UserPostgresEntity implements User {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  firstName!: string;

  @Column()
  lastName!: string;

  constructor(partial?: Partial<UserPostgresEntity>) {
    if (partial) {
      Object.assign(this, partial);
    }
  }
}

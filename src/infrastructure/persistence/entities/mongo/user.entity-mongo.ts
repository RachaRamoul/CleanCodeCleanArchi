import { Entity, Column, PrimaryGeneratedColumn, ObjectIdColumn } from 'typeorm';
import { User } from '../../../../domain/entities/user.entity';

@Entity('users')
export class UserMongoEntity implements User {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ObjectIdColumn()
  _id?: string;

  @Column()
  firstName!: string;

  @Column()
  lastName!: string;
}

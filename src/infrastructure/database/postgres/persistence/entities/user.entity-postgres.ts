import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import { User } from '../../../../../domain/entities/user.entity';
import bcrypt from 'bcrypt';

@Entity('users')
export default class UserPostgresEntity implements User {
  @PrimaryGeneratedColumn('uuid')
  userId!: string;

  @Column()
  company_Id!: string;    

  @Column()
  nom!: string;           

  @Column()
  prenom!: string;        

  @Column()
  email!: string;

  @Column()
  password!: string;      

  @Column()
  telephone!: string;    

  @Column()
  numeroSiret!: string;   

  @Column()
  type!: string;          
  
  @BeforeInsert()
  async hashPassword() {
    if (this.password) {
      this.password = await bcrypt.hash(this.password, 10);
    }
  }

  constructor(partial?: Partial<UserPostgresEntity>) {
    if (partial) {
      Object.assign(this, partial);
    }
  }
}

import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import bcrypt from 'bcrypt';


@Entity('companies')
export default class CompanyPostgresEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  name!: string;

  @Column()
  email!: string;

  @Column()
  number!: string;

  @Column()
  siretNumber!: string;

  @Column({ default: false })
  isAdmin!: boolean;

  @Column({ select: false })
  password!: string;

  @BeforeInsert()
  async hashPassword() {
    if (this.password) {
      this.password = await bcrypt.hash(this.password, 10);
    }
  }

  constructor(partial?: Partial<CompanyPostgresEntity>) {
    if (partial) {
      Object.assign(this, partial);
    }
  }
}

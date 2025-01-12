import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Company } from '../../../../../domain/entities/company.entity';

@Entity('companies')
export class CompanyPostgresEntity implements Company {
  @PrimaryGeneratedColumn('uuid')
  companyId!: string;

  @Column()
  name!: string;

  @Column()
  email!: string;

  @Column()
  number!: string;

  @Column()
  siretNumber!: string;

  @Column()
  password!: string;
}

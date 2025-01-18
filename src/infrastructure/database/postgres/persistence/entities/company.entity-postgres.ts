import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Company } from '../../../../../domain/entities/company.entity';

@Entity('companies')
export default class CompanyPostgresEntity implements Company {
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

  constructor(partial?: Partial<CompanyPostgresEntity>) {
    if (partial) {
      Object.assign(this, partial);
    }
  }
}

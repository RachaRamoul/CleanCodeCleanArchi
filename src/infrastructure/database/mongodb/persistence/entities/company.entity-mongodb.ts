import { Entity, Column, PrimaryGeneratedColumn, ObjectIdColumn } from 'typeorm';
import { Company } from '../../../../../domain/entities/company.entity';

@Entity('companies')
export class CompanyMongoEntity implements Company {
  @PrimaryGeneratedColumn('uuid')
  companyId!: string;

  @ObjectIdColumn()
  _id?: string;

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

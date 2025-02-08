import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from 'typeorm';
import CompanyPostgresEntity from './company.entity-postgres';
@Entity('drivers')
export default class DriverPostgresEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  firstName!: string;

  @Column()
  lastName!: string;

  @ManyToOne(() => CompanyPostgresEntity, { eager: true })
  @JoinColumn({ name: 'company_id' })
  company!: CompanyPostgresEntity;
  
  @Column()
  phoneNumber!: string;   

  @Column()
  licenseNumber!: string;  

  @Column()
  experienceYears!: number;  

  constructor(partial?: Partial<DriverPostgresEntity>) {
    if (partial) {
      Object.assign(this, partial);
    }
  }
}

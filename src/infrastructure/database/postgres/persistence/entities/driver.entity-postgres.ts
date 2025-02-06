import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('drivers')
export class DriverPostgresEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  firstName!: string;

  @Column()
  lastName!: string;

  @Column()
  companyId!: string;
  
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

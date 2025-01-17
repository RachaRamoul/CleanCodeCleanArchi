import { Driver } from '../../../../../domain/entities/driver.entity';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('drivers')
export class DriverPostgresEntity implements Driver {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  firstName!: string;

  @Column()
  lastName!: string;

  @Column()
  licenseNumber!: string;  // Ajout de la propriété manquante

  @Column()
  experienceYears!: number;  // Ajout de la propriété manquante

  @Column("text", { array: true })
  incidentHistory!: string[];  // Ajout de la propriété manquante

  constructor(partial?: Partial<DriverPostgresEntity>) {
    if (partial) {
      Object.assign(this, partial);
    }
  }
}

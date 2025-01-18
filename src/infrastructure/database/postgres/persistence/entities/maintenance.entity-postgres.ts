import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Maintenance } from '../../../../../domain/entities/maintenance.entity';

@Entity('maintenances')
export class MaintenancePostgresEntity implements Maintenance {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  motorcycleId!: string;

  @Column()
  partId!: string;

  @Column()
  maintenanceType!: string;

  @Column()
  recommendations!: string;

  @Column('decimal')
  cost!: number;

  @Column()
  date!: Date;

  constructor(partial?: Partial<MaintenancePostgresEntity>) {
    if (partial) {
      Object.assign(this, partial);
    }
  }
}

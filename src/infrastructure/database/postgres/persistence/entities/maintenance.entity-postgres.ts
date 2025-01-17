import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Maintenance } from '../../../../../domain/entities/maintenance.entity';

@Entity('maintenances')
export class MaintenancePostgresEntity implements Maintenance {
  @PrimaryGeneratedColumn('uuid')
  maintenanceId!: string;

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

  constructor(
    maintenanceId: string,
    motorcycleId: string,
    partId: string,
    maintenanceType: string,
    recommendations: string,
    cost: number,
    date: Date
  ) {
    this.maintenanceId = maintenanceId;
    this.motorcycleId = motorcycleId;
    this.partId = partId;
    this.maintenanceType = maintenanceType;
    this.recommendations = recommendations;
    this.cost = cost;
    this.date = date;
  }
}

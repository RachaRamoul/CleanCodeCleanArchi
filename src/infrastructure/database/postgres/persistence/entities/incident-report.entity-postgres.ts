import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('incident_reports')
export class IncidentReportPostgresEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  driverId!: string;   

  @Column()
  incidentType!: string;

  @Column()
  description!: string;

  @Column({ default: false })
  isMotorcycleRideTest!: boolean;

  @Column()
  date!: Date;

  constructor(partial?: Partial<IncidentReportPostgresEntity>) {
    if (partial) {
      Object.assign(this, partial);
    }
  }
}

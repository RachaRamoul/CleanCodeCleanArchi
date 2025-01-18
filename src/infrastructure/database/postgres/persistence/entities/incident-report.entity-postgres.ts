import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IncidentReport } from '../../../../../domain/entities/incident-report.entity';

@Entity('incident_reports')
export class IncidentReportPostgresEntity implements IncidentReport {
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

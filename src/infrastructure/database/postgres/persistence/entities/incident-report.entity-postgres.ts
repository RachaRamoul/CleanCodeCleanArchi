import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IncidentReport } from '../../../../../domain/entities/incident-report.entity';

@Entity('incident_reports')
export class IncidentReportPostgresEntity implements IncidentReport {
  @PrimaryGeneratedColumn('uuid')
  incidentReportId!: string;

  @Column()
  incidentType!: string;

  @Column()
  description!: string;

  @Column()
  date!: Date;

  constructor(
    incidentReportId: string,
    incidentType: string,
    description: string,
    date: Date
  ) {
    this.incidentReportId = incidentReportId;
    this.incidentType = incidentType;
    this.description = description;
    this.date = date;
  }
}

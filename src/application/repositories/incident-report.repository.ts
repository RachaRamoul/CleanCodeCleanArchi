import { IncidentReport } from '../../domain/entities/incident-report.entity';

export interface IIncidentReportRepository {
  findById(id: string): Promise<IncidentReport | null>;
  save(incidentReport: IncidentReport): Promise<IncidentReport>;
  listIncidentReports(): Promise<IncidentReport[]>;
  removeIncidentReport(id: string): Promise<void>;
}

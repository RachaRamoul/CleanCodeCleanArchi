import { IncidentReport } from '../../../../../domain/entities/incident-report.entity';
import { IIncidentReport, IncidentReportModel } from '../entities/incident-report.entity-mongodb';

export class IncidentReportMapper {
  static toDomain(incidentReportEntity: IIncidentReport): IncidentReport {
    return new IncidentReport(
      incidentReportEntity.incidentReportId,  
      incidentReportEntity.incidentType,      
      incidentReportEntity.description,       
      incidentReportEntity.date               
    );
  }

  static toModel(incidentReport: IncidentReport): IIncidentReport {
    return new IncidentReportModel(incidentReport);
  }
}

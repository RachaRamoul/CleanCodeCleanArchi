import { IncidentReport } from '../../../../../domain/entities/incident-report.entity';
import { IIncidentReport, IncidentReportModel } from '../entities/incident-report.entity-mongodb';

export class IncidentReportMapper {
  static toDomain(incidentReportEntity: IIncidentReport): IncidentReport {
    return new IncidentReport(
      incidentReportEntity.incidentReportId,  // incidentReportId
      incidentReportEntity.incidentType,      // incidentType
      incidentReportEntity.description,       // description
      incidentReportEntity.date               // date
    );
  }

  static toModel(incidentReport: IncidentReport): IIncidentReport {
    return new IncidentReportModel(incidentReport);
  }
}

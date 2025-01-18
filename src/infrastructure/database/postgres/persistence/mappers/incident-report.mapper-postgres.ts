import { IncidentReportPostgresEntity } from "../entities/incident-report.entity-postgres";
import { IncidentReport } from "../../../../../domain/entities/incident-report.entity";

export class IncidentReportMapper {
  static toDomain(incidentReportEntity: IncidentReportPostgresEntity): IncidentReport {
    return new IncidentReport(
      incidentReportEntity.incidentReportId,
      incidentReportEntity.incidentType,
      incidentReportEntity.description,
      incidentReportEntity.date
    );
  }

  static toPersistence(domain: IncidentReport): IncidentReportPostgresEntity {
    return new IncidentReportPostgresEntity(
      domain.incidentReportId,
      domain.incidentType,
      domain.description,
      domain.date
    );
  }
}

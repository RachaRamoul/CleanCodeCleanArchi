import { IncidentReportPostgresEntity } from "../entities/incident-report.entity-postgres";
import { IncidentReport } from "../../../../../domain/entities/incident-report.entity";

export class IncidentReportMapper {
  static toDomain(incidentReportEntity: IncidentReportPostgresEntity): IncidentReport {
    return new IncidentReport(
      incidentReportEntity.id,
      incidentReportEntity.driverId,
      incidentReportEntity.incidentType,
      incidentReportEntity.description,
      incidentReportEntity.isMotorcycleRideTest,
      incidentReportEntity.date
    );
  }

  static toModel(incidentReport: IncidentReport): IncidentReportPostgresEntity {
    return new IncidentReportPostgresEntity(incidentReport);
  }
}

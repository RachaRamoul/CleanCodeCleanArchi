import { MaintenancePostgresEntity } from "../entities/maintenance.entity-postgres";
import { Maintenance } from "../../../../../domain/entities/maintenance.entity";

export class MaintenanceMapper {
  // Convertir l'entité PostgreSQL en entité du domaine
  static toDomain(maintenanceEntity: MaintenancePostgresEntity): Maintenance {
    return new Maintenance(
      maintenanceEntity.maintenanceId,
      maintenanceEntity.motorcycleId,
      maintenanceEntity.partId,
      maintenanceEntity.maintenanceType,
      maintenanceEntity.recommendations,
      maintenanceEntity.cost,
      maintenanceEntity.date
    );
  }

  // Convertir l'entité du domaine en entité PostgreSQL
  static toPersistence(domain: Maintenance): MaintenancePostgresEntity {
    return new MaintenancePostgresEntity(
      domain.maintenanceId,
      domain.motorcycleId,
      domain.partId,
      domain.maintenanceType,
      domain.recommendations,
      domain.cost,
      domain.date
    );
  }
}

import { MaintenancePostgresEntity } from "../entities/maintenance.entity-postgres";
import { Maintenance } from "../../../../../domain/entities/maintenance.entity";

export class MaintenanceMapper {
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

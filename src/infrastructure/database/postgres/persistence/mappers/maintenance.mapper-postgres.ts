import { MaintenancePostgresEntity } from "../entities/maintenance.entity-postgres";
import { Maintenance } from "../../../../../domain/entities/maintenance.entity";

export class MaintenanceMapper {
  static toDomain(maintenanceEntity: MaintenancePostgresEntity): Maintenance {
    return new Maintenance(
      maintenanceEntity.id,
      maintenanceEntity.motorcycleId,
      maintenanceEntity.partId,
      maintenanceEntity.maintenanceType,
      maintenanceEntity.recommendations,
      maintenanceEntity.cost,
      maintenanceEntity.date
    );
  }

  static toModel(maintenance: Maintenance): MaintenancePostgresEntity {
    return new MaintenancePostgresEntity(maintenance);
  }
}

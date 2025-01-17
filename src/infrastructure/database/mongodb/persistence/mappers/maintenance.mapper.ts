import { Maintenance } from '../../../../../domain/entities/maintenance.entity';
import { IMaintenance, MaintenanceModel } from '../entities/maintenance.entity-mongodb';

export class MaintenanceMapper {
  static toDomain(maintenanceEntity: IMaintenance): Maintenance {
    return new Maintenance(
      maintenanceEntity.maintenanceId,  // maintenanceId
      maintenanceEntity.motorcycleId,   // motorcycleId
      maintenanceEntity.partId,         // partId
      maintenanceEntity.maintenanceType,// maintenanceType
      maintenanceEntity.recommendations,// recommendations
      maintenanceEntity.cost,           // cost
      maintenanceEntity.date            // date
    );
  }

  static toModel(maintenance: Maintenance): IMaintenance {
    return new MaintenanceModel(maintenance);
  }
}

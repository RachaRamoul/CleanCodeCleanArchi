import { Maintenance } from '../../../../../domain/entities/maintenance.entity';
import { IMaintenance, MaintenanceModel } from '../entities/maintenance.entity-mongodb';

export class MaintenanceMapper {
  static toDomain(maintenanceEntity: IMaintenance): Maintenance {
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

  static toModel(maintenance: Maintenance): IMaintenance {
    return new MaintenanceModel(maintenance);
  }
}

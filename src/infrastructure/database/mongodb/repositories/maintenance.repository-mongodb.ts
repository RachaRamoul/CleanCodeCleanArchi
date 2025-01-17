import { Maintenance } from '../../../../domain/entities/maintenance.entity';
import { MaintenanceModel } from '../persistence/entities/maintenance.entity-mongodb'; 
import { MaintenanceMapper } from '../persistence/mappers/maintenance.mapper-mongodb'; 
import { IMaintenanceRepository } from '../../../../application/repositories/maintenance.repository';
import { ObjectId } from 'mongodb';

export class MongoMaintenanceRepository implements IMaintenanceRepository {

  async findById(id: string): Promise<Maintenance | null> {
    const maintenanceEntity = await MaintenanceModel.findOne({ _id: new ObjectId(id) });
    return maintenanceEntity ? MaintenanceMapper.toDomain(maintenanceEntity) : null;
  }

  async save(maintenance: Maintenance): Promise<Maintenance> {
    const maintenanceEntity = MaintenanceMapper.toModel(maintenance);
    const savedMaintenanceEntity = await maintenanceEntity.save();
    return MaintenanceMapper.toDomain(savedMaintenanceEntity);
  }

  async listMaintenances(): Promise<Maintenance[]> {
    const maintenanceEntities = await MaintenanceModel.find();
    return maintenanceEntities.map((maintenanceEntity) => MaintenanceMapper.toDomain(maintenanceEntity));
  }

  async removeMaintenance(id: string): Promise<void> {
    await MaintenanceModel.deleteOne({ _id: new ObjectId(id) });
  }
}

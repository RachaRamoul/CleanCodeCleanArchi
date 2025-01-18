import { Maintenance } from '../../domain/entities/maintenance.entity';

export interface IMaintenanceRepository {
  findById(id: string): Promise<Maintenance | null>;
  save(maintenance: Maintenance): Promise<Maintenance>;
  listMaintenances(): Promise<Maintenance[]>;
  removeMaintenance(id: string): Promise<void>;
}

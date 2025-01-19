import { Repository } from 'typeorm';
import { AppDataSource } from '../postgres.config';
import { MaintenancePostgresEntity } from '../persistence/entities/maintenance.entity-postgres';
import { IMaintenanceRepository } from '../../../../application/repositories/maintenance.repository';

export class MaintenanceRepositoryPostgres implements IMaintenanceRepository{
  private repository: Repository<MaintenancePostgresEntity>;

  constructor() {
    this.repository = AppDataSource.getRepository(MaintenancePostgresEntity);
  }

  async create(maintenance: MaintenancePostgresEntity): Promise<MaintenancePostgresEntity> {
    return this.repository.save(maintenance);
  }

  async findById(id: string): Promise<MaintenancePostgresEntity | null> {
    return this.repository.findOneBy({ id });
  }

  async findAll(): Promise<MaintenancePostgresEntity[]> {
    return this.repository.find();
  }

  async update(
    maintenanceId: string,
    updateData: Partial<MaintenancePostgresEntity>
  ): Promise<void> {
    await this.repository.update(maintenanceId, updateData);
  }

  async delete(maintenanceId: string): Promise<void> {
    await this.repository.delete(maintenanceId);
  }

  async findByMotorcycleId(motorcycleId: string): Promise<MaintenancePostgresEntity[]> {
    return this.repository.find({ where: { motorcycleId } });
  }
}

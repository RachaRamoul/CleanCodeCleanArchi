import { Repository } from 'typeorm';
import { AppDataSource } from '../postgres.config';
import { MaintenancePostgresEntity } from '../persistence/entities/maintenance.entity-postgres';

export class MaintenanceRepositoryPostgres {
  private repository: Repository<MaintenancePostgresEntity>;

  constructor() {
    this.repository = AppDataSource.getRepository(MaintenancePostgresEntity);
  }

  async create(maintenance: MaintenancePostgresEntity): Promise<MaintenancePostgresEntity> {
    return this.repository.save(maintenance);
  }

  async findById(maintenanceId: string): Promise<MaintenancePostgresEntity | null> {
    return this.repository.findOneBy({ maintenanceId });
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

  // Optionally, add more specific queries, e.g., find by motorcycleId
  async findByMotorcycleId(motorcycleId: string): Promise<MaintenancePostgresEntity[]> {
    return this.repository.find({ where: { motorcycleId } });
  }
}

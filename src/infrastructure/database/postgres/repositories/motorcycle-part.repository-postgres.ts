import { Repository } from 'typeorm';
import { AppDataSource } from '../postgres.config';
import { MotorcyclePartPostgresEntity } from '../persistence/entities/motorcycle-part.postgres.entity';

export class MotorcyclePartRepositoryPostgres {
  private repository: Repository<MotorcyclePartPostgresEntity>;

  constructor() {
    this.repository = AppDataSource.getRepository(MotorcyclePartPostgresEntity);
  }

  async create(part: MotorcyclePartPostgresEntity): Promise<MotorcyclePartPostgresEntity> {
    return this.repository.save(part);
  }

  async findById(partId: string): Promise<MotorcyclePartPostgresEntity | null> {
    return this.repository.findOne({
      where: { partId },
    });
  }

  async findAll(): Promise<MotorcyclePartPostgresEntity[]> {
    return this.repository.find();
  }

  async update(
    partId: string,
    updateData: Partial<MotorcyclePartPostgresEntity>
  ): Promise<void> {
    await this.repository.update(partId, updateData);
  }

  async delete(partId: string): Promise<void> {
    await this.repository.delete(partId);
  }

  async findLowStockParts(): Promise<MotorcyclePartPostgresEntity[]> {
    return this.repository.find({
      where: { lowStockAlert: true },
    });
  }
}

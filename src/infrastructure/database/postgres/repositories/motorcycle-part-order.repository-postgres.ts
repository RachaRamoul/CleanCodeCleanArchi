import { Repository } from 'typeorm';
import { AppDataSource } from '../postgres.config';
import { MotorcyclePartOrderPostgresEntity } from '../persistence/entities/motorcycle-part-order.postgres.entity';

export class MotorcyclePartOrderRepositoryPostgres {
  private repository: Repository<MotorcyclePartOrderPostgresEntity>;

  constructor() {
    this.repository = AppDataSource.getRepository(MotorcyclePartOrderPostgresEntity);
  }

  async create(order: MotorcyclePartOrderPostgresEntity): Promise<MotorcyclePartOrderPostgresEntity> {
    return this.repository.save(order);
  }

  async findById(orderId: string): Promise<MotorcyclePartOrderPostgresEntity | null> {
    return this.repository.findOne({
      where: { orderId },
      relations: ['motorcyclePart'], // Charger aussi les détails de la pièce
    });
  }

  async findAll(): Promise<MotorcyclePartOrderPostgresEntity[]> {
    return this.repository.find({
      relations: ['motorcyclePart'], // Charger aussi les détails de la pièce
    });
  }

  async update(
    orderId: string,
    updateData: Partial<MotorcyclePartOrderPostgresEntity>
  ): Promise<void> {
    await this.repository.update(orderId, updateData);
  }

  async delete(orderId: string): Promise<void> {
    await this.repository.delete(orderId);
  }
}

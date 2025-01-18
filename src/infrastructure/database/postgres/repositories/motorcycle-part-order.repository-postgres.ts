import { Repository } from 'typeorm';
import { AppDataSource } from '../postgres.config';
import { MotorcyclePartOrderPostgresEntity } from '../persistence/entities/motorcycle-part-order.entity-postgres';
import { IMotorcyclePartOrderRepository } from '../../../../application/repositories/motorcycle-part-order.repository';

export class MotorcyclePartOrderRepositoryPostgres implements IMotorcyclePartOrderRepository{
  private repository: Repository<MotorcyclePartOrderPostgresEntity>;

  constructor() {
    this.repository = AppDataSource.getRepository(MotorcyclePartOrderPostgresEntity);
  }

  async create(order: MotorcyclePartOrderPostgresEntity): Promise<MotorcyclePartOrderPostgresEntity> {
    return this.repository.save(order);
  }

  async findById(id: string): Promise<MotorcyclePartOrderPostgresEntity | null> {
    return this.repository.findOne({
      where: { id },
      relations: ['motorcyclePart'], 
    });
  }

  async findAll(): Promise<MotorcyclePartOrderPostgresEntity[]> {
    return this.repository.find({
      relations: ['motorcyclePart'],
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

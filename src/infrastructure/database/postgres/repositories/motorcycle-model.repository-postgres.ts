import { Repository } from 'typeorm';
import { AppDataSource } from '../postgres.config';
import MotorcycleModelPostgresEntity from '../persistence/entities/motorcycle-model.entity-postgres';
import { IMotorcycleModelRepository } from '../../../../application/repositories/motorcycle-model.repository';
import Name from '../../../../domain/value-objects/name.vo';
import { MotorcycleModel } from '../../../../domain/entities/motorcycle-model.entity';
import { MotorcycleModelMapper } from '../persistence/mappers/motorcycle-model.mapper-postgres';

export class MotorcycleModelRepositoryPostgres implements IMotorcycleModelRepository{
  private repository: Repository<MotorcycleModelPostgresEntity>;

  constructor() {
    this.repository = AppDataSource.getRepository(MotorcycleModelPostgresEntity);
  }
  
  async findById(id: string): Promise<MotorcycleModel | null> {
    const motorcycleModelEntity = await this.repository.findOneBy({ id });
    return motorcycleModelEntity ? MotorcycleModelMapper.toDomain(motorcycleModelEntity) : null; 
  }

  async findByName(name: Name): Promise<MotorcycleModel | null> {
    const motorcycleModelEntity = await this.repository
      .createQueryBuilder('motorcycle')
      .where('motorcycle.name = :name', { name: name.value })
      .getOne();

    return motorcycleModelEntity ? MotorcycleModelMapper.toDomain(motorcycleModelEntity) : null;
  }

  async findAll(): Promise<MotorcycleModel[]> {
    const motorcycleModels = await this.repository.find();
    return motorcycleModels.map((model) => MotorcycleModelMapper.toDomain(model));
  }

  async save(motorcycleModel: MotorcycleModel): Promise<MotorcycleModel> {
    const motorcycleModelEntity = MotorcycleModelMapper.toModel(motorcycleModel);
    const savedMotorcycleModelEntity = await this.repository.save(motorcycleModelEntity);
    return MotorcycleModelMapper.toDomain(savedMotorcycleModelEntity);
  }

  async remove(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}

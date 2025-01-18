import { Repository } from 'typeorm';
import { AppDataSource } from '../postgres.config';
import ModelPostgresEntity from '../persistence/entities/model.entity-postgres';
import { IModelRepository } from '../../../../application/repositories/model.repository';

export class ModelRepositoryPostgres implements IModelRepository{
  private repository: Repository<ModelPostgresEntity>;

  constructor() {
    this.repository = AppDataSource.getRepository(ModelPostgresEntity);
  }

  async create(model: ModelPostgresEntity): Promise<ModelPostgresEntity> {
    return this.repository.save(model);
  }

  async findById(id: string): Promise<ModelPostgresEntity | null> {
    return this.repository.findOneBy({ id });
  }

  async findAll(): Promise<ModelPostgresEntity[]> {
    return this.repository.find();
  }

  async update(
    modelId: string,
    updateData: Partial<ModelPostgresEntity>
  ): Promise<void> {
    await this.repository.update(modelId, updateData);
  }

  async delete(modelId: string): Promise<void> {
    await this.repository.delete(modelId);
  }
}

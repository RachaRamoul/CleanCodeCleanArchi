import { Repository } from 'typeorm';
import { AppDataSource } from '../postgres.config';
import { DriverPostgresEntity } from '../persistence/entities/driver.entity-postgres';
import { IDriverRepository } from '../../../../application/repositories/driver.repository';

export class DriverRepositoryPostgres implements IDriverRepository{
  private repository: Repository<DriverPostgresEntity>;

  constructor() {
    this.repository = AppDataSource.getRepository(DriverPostgresEntity);
  }

  async create(driver: DriverPostgresEntity): Promise<DriverPostgresEntity> {
    return this.repository.save(driver);
  }

  async findById(id: string): Promise<DriverPostgresEntity | null> {
    return this.repository.findOneBy({ id });
  }

  async findAll(): Promise<DriverPostgresEntity[]> {
    return this.repository.find();
  }

  async update(id: string, updateData: Partial<DriverPostgresEntity>): Promise<void> {
    await this.repository.update(id, updateData);
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}

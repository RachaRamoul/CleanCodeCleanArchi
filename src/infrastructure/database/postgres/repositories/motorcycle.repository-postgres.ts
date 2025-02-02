import { Repository } from "typeorm";
import { AppDataSource } from '../postgres.config';
import { Motorcycle } from "../../../../domain/entities/motorcycle.entity";
import { MotorcyclePostgresEntity } from "../persistence/entities/motorcycle.entity-postgres";
import { IMotorcycleRepository } from "../../../../application/repositories/motorcycle.repository";
import { MotorcycleMapper } from "../persistence/mappers/motorcycle.mapper-postgres";

export class MotorcycleRepositoryPostgres implements IMotorcycleRepository {
  private repository: Repository<MotorcyclePostgresEntity>;

  constructor() {
    this.repository = AppDataSource.getRepository(MotorcyclePostgresEntity);
  }

  async findById(id: string): Promise<Motorcycle | null> {
    const motorcycle = await this.repository.findOneBy({ id });
    return motorcycle ? MotorcycleMapper.toDomain(motorcycle) : null;
  }

  async save(motorcycle: Motorcycle): Promise<Motorcycle> {
    const entity = MotorcycleMapper.toModel(motorcycle);
    const savedMotorcycle = await this.repository.save(entity);
    return MotorcycleMapper.toDomain(savedMotorcycle);
  }

  async findAll(): Promise<Motorcycle[]> {
    const motorcycles = await this.repository.find();
    return motorcycles.map(MotorcycleMapper.toDomain);
  }

  async update(id: string, updateData: Partial<Motorcycle>): Promise<Motorcycle> {
    await this.repository.update(id, updateData);
    const updatedMotorcycle = await this.findById(id);
    if (!updatedMotorcycle) throw new Error("Motorcycle not found");
    return updatedMotorcycle;
  }

  async remove(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
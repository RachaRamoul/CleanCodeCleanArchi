import { Repository } from "typeorm";
import { AppDataSource } from '../postgres.config';
import { MotorcyclePart } from "../../../../domain/entities/motorcycle-part.entity";
import { MotorcyclePartPostgresEntity } from "../persistence/entities/motorcycle-part.entity-postgres";
import { IMotorcyclePartRepository } from "../../../../application/repositories/motorcycle-part.repository";
import { MotorcyclePartMapper } from "../persistence/mappers/motorcycle-part.mapper-postgres";

export class MotorcyclePartRepositoryPostgres implements IMotorcyclePartRepository {
  private repository: Repository<MotorcyclePartPostgresEntity>;

  constructor() {
    this.repository = AppDataSource.getRepository(MotorcyclePartPostgresEntity);
  }

  async findById(id: string): Promise<MotorcyclePart | null> {
    const part = await this.repository.findOneBy({ id });
    return part ? MotorcyclePartMapper.toDomain(part) : null;
  }

  async add(motorcyclePart: MotorcyclePart): Promise<MotorcyclePart> {
    const entity = MotorcyclePartMapper.toModel(motorcyclePart);
    const savedMotorcyclePartEntity = await this.repository.save(entity);
    return MotorcyclePartMapper.toDomain(savedMotorcyclePartEntity);
  }

  async getAll(): Promise<MotorcyclePart[]> {
    const parts = await this.repository.find();
    return parts.map(MotorcyclePartMapper.toDomain);
  }

  async update(motorcyclePart: MotorcyclePart): Promise<MotorcyclePart> {
    const result = await this.repository.createQueryBuilder()
      .update(MotorcyclePart)
      .set(motorcyclePart)
      .where("id = :id", { id: motorcyclePart.id })
      .returning("*")
      .execute();
  
    const updatedMotorcyclePart = result.raw[0];
  
    if (!updatedMotorcyclePart) {
      throw new Error('motorcycle Part not found for update');
    }
  
    return MotorcyclePartMapper.toDomain(updatedMotorcyclePart);
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
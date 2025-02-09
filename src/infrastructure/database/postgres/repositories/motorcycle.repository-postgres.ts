import { Repository } from "typeorm";
import { AppDataSource } from "../postgres.config";
import { Motorcycle } from "../../../../domain/entities/motorcycle.entity";
import { MotorcyclePostgresEntity } from "../persistence/entities/motorcycle.entity-postgres";
import { IMotorcycleRepository } from "../../../../application/repositories/motorcycle.repository";
import { MotorcycleMapper } from "../persistence/mappers/motorcycle.mapper-postgres";
import Mileage from "../../../../domain/value-objects/mileage.vo";

export class MotorcycleRepositoryPostgres implements IMotorcycleRepository {
  private repository: Repository<MotorcyclePostgresEntity>;

  constructor() {
    this.repository = AppDataSource.getRepository(MotorcyclePostgresEntity);
  }

  async findById(id: string): Promise<Motorcycle | null> {
    const motorcycleEntity = await this.repository.findOneBy({ id });
    return motorcycleEntity ? MotorcycleMapper.toDomain(motorcycleEntity) : null;
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
    if (updateData.mileage && typeof updateData.mileage === "number") {
      updateData.mileage = new Mileage(updateData.mileage);
    }

    await this.repository.update(id, MotorcycleMapper.toModel(updateData as Motorcycle));
    const updatedMotorcycle = await this.findById(id);
    if (!updatedMotorcycle) throw new Error("Motorcycle not found");
    return updatedMotorcycle;
  }

  async remove(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
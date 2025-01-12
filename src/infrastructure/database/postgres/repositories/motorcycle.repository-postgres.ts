import { Repository } from "typeorm";
import { Motorcycle } from "../../../../domain/entities/motorcycle.entity";
import { MotorcyclePostgresEntity } from "../persistence/entities/motorcycle.entity-postgres";
import { IMotorcycleRepository } from "../../../../application/repositories/motorcycle.repository";
import { MotorcycleMapper } from "../persistence/mappers/motorcycle.mapper-postgres";

export class MotorcycleRepositoryPostgres implements IMotorcycleRepository {
  private ormRepository: Repository<MotorcyclePostgresEntity>;

  constructor(ormRepository: Repository<MotorcyclePostgresEntity>) {
    this.ormRepository = ormRepository;
  }

  async save(motorcycle: Motorcycle): Promise<Motorcycle> {
    const motorcycleEntity = this.ormRepository.create(
      MotorcycleMapper.toPersistence(motorcycle)
    );

    const result = await this.ormRepository.save(motorcycleEntity);

    return MotorcycleMapper.toDomain(result);
  }

  async findAll(): Promise<Motorcycle[]> {
    const motorcycles = await this.ormRepository.find();
    return motorcycles.map((moto) => ({
      id: moto.id,
      motorcycleId: moto.motorcycleId,
      modelId: moto.modelId,
      mileage: moto.mileage,
      status: moto.status,
      companyId: moto.companyId,
    }));
  }
}

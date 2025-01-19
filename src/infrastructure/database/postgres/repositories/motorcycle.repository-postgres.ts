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
      MotorcycleMapper.toModel(motorcycle)
    );

    const result = await this.ormRepository.save(motorcycleEntity);

    return MotorcycleMapper.toDomain(result);
  }

  async findAll(): Promise<Motorcycle[]> {
    const motorcycles = await this.ormRepository.find();
    return motorcycles.map((moto) => MotorcycleMapper.toDomain(moto));
  }

  async findById(id: string): Promise<Motorcycle | null> {
    const motorcycle = await this.ormRepository.findOneBy({ id });
    return motorcycle ? MotorcycleMapper.toDomain(motorcycle) : null;
  }
}

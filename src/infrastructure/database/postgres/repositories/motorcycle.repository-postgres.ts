import { Motorcycle } from '../../../../domain/entities/motorcycle.entity';
import { MotorcyclePostgresEntity } from '../persistence/entities/motorcycle.postgres.entity';
import { MotorcycleMapper } from '../persistence/mappers/motorcycle.mapper-postgres';
import { AppDataSource } from '../../config/database.config';
import { IMotorcycleRepository } from '../../../../application/repositories/motorcycle.repository';

export class PostgresMotorcycleRepository implements IMotorcycleRepository {
  private motorcycleRepository = AppDataSource.getRepository(MotorcyclePostgresEntity);

  async findById(id: string): Promise<Motorcycle | null> {
    const motorcycleEntity = await this.motorcycleRepository.findOneBy({ motorcycleId: id });
    return motorcycleEntity ? MotorcycleMapper.toDomain(motorcycleEntity) : null;
  }

  async save(motorcycle: Motorcycle): Promise<Motorcycle> {
    const motorcycleEntity = MotorcycleMapper.toModel(motorcycle);
    const savedMotorcycleEntity = await this.motorcycleRepository.save(motorcycleEntity);
    return MotorcycleMapper.toDomain(savedMotorcycleEntity);
  }

  async listMotorcycles(): Promise<Motorcycle[]> {
    const motorcycleEntities = await this.motorcycleRepository.find();
    return motorcycleEntities.map((motorcycleEntity) => MotorcycleMapper.toDomain(motorcycleEntity));
  }

  async removeMotorcycle(id: string): Promise<void> {
    await this.motorcycleRepository.delete({ motorcycleId: id });
  }
}

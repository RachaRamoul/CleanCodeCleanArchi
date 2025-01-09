import { Motorcycle } from '../../../../domain/entities/motorcycle.entity';
import { MotorcycleMongoEntity } from '../persistence/entities/motorcycle.mongo.entity';
import { MotorcycleMapper } from '../persistence/mappers/motorcycle.mapper-mongodb'
import { AppDataSource } from '../../config/database.config';
import { IMotorcycleRepository } from '../../../../application/repositories/motorcycle.repository';
import { ObjectId } from 'mongodb';

export class MongoMotorcycleRepository implements IMotorcycleRepository {
  private motorcycleRepository = AppDataSource.getMongoRepository(MotorcycleMongoEntity);

  async findById(id: string): Promise<Motorcycle | null> {
    const motorcycleEntity = await this.motorcycleRepository.findOne({ where: { _id: new ObjectId(id) } });
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
    await this.motorcycleRepository.deleteOne({ _id: new ObjectId(id) });
  }
}

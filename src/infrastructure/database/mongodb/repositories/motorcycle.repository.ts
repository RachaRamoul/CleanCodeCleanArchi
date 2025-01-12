import { Motorcycle } from '../../../../domain/entities/motorcycle.entity';
import { MotorcycleModel } from '../persistence/entities/motorcycle.mongo.entity';
import { MotorcycleMapper } from '../persistence/mappers/motorcycle.mapper-mongodb';
import { IMotorcycleRepository } from '../../../../application/repositories/motorcycle.repository';
import { ObjectId } from 'mongodb';

export class MongoMotorcycleRepository implements IMotorcycleRepository {

  async findById(id: string): Promise<Motorcycle | null> {
    const motorcycleEntity = await MotorcycleModel.findOne({ where: { _id: new ObjectId(id) } });
    return motorcycleEntity ? MotorcycleMapper.toDomain(motorcycleEntity) : null;
  }

  async save(motorcycle: Motorcycle): Promise<Motorcycle> {
    const motorcycleEntity = MotorcycleMapper.toModel(motorcycle);
    const savedMotorcycleEntity = await motorcycleEntity.save();
    return MotorcycleMapper.toDomain(savedMotorcycleEntity);
  }

  async listMotorcycles(): Promise<Motorcycle[]> {
    const motorcycleEntities = await MotorcycleModel.find();
    return motorcycleEntities.map((motorcycleEntity) => MotorcycleMapper.toDomain(motorcycleEntity));
  }

  async removeMotorcycle(id: string): Promise<void> {
    await MotorcycleModel.deleteOne({ _id: new ObjectId(id) });
  }
}

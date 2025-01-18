import { MotorcyclePart } from '../../../../domain/entities/motorcycle-part.entity';
import { MotorcyclePartModel } from '../persistence/entities/motorcycle-part.entity-mongodb'; 
import { MotorcyclePartMapper } from '../persistence/mappers/motorcycle-part.mapper-mongodb'; 
import { IMotorcyclePartRepository } from '../../../../application/repositories/motorcycle-part.repository';
import { ObjectId } from 'mongodb';

export class MongoMotorcyclePartRepository implements IMotorcyclePartRepository {

  async findById(id: string): Promise<MotorcyclePart | null> {
    const motorcyclePartEntity = await MotorcyclePartModel.findOne({ _id: new ObjectId(id) });
    return motorcyclePartEntity ? MotorcyclePartMapper.toDomain(motorcyclePartEntity) : null;
  }

  async save(motorcyclePart: MotorcyclePart): Promise<MotorcyclePart> {
    const motorcyclePartEntity = MotorcyclePartMapper.toModel(motorcyclePart);
    const savedMotorcyclePartEntity = await motorcyclePartEntity.save();
    return MotorcyclePartMapper.toDomain(savedMotorcyclePartEntity);
  }

  async listMotorcycleParts(): Promise<MotorcyclePart[]> {
    const motorcyclePartEntities = await MotorcyclePartModel.find();
    return motorcyclePartEntities.map((motorcyclePartEntity) => MotorcyclePartMapper.toDomain(motorcyclePartEntity));
  }

  async removeMotorcyclePart(id: string): Promise<void> {
    await MotorcyclePartModel.deleteOne({ _id: new ObjectId(id) });
  }
}

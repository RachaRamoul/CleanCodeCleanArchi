import { MotorcyclePart } from '../../../../domain/entities/motorcycle-part.entity';
import { MotorcyclePartModel } from '../persistence/entities/motorcycle-part.entity-mongodb';
import { MotorcyclePartMapper } from '../persistence/mappers/motorcycle-part.mapper-mongodb'; 
import { IMotorcyclePartRepository } from '../../../../application/repositories/motorcycle-part.repository';
import { ObjectId } from 'mongodb';
import { Types } from 'mongoose';

export class MotorcyclePartRepositoryMongoDB implements IMotorcyclePartRepository {

  async findById(id: string): Promise<MotorcyclePart | null> {
    const motorcyclePartEntity = await MotorcyclePartModel.findOne({ _id: new ObjectId(id) });
    return motorcyclePartEntity ? MotorcyclePartMapper.toDomain(motorcyclePartEntity) : null;
  }

  async add(motorcyclePart: MotorcyclePart): Promise<MotorcyclePart> {
    const motorcyclePartEntity = MotorcyclePartMapper.toModel(motorcyclePart);
    const savedMotorcyclePartEntity = await motorcyclePartEntity.save();
    return MotorcyclePartMapper.toDomain(savedMotorcyclePartEntity);
  }

  async getAll(): Promise<MotorcyclePart[]> {
    const motorcyclePartEntities = await MotorcyclePartModel.find();
    return motorcyclePartEntities.map((motorcyclePartEntity) => MotorcyclePartMapper.toDomain(motorcyclePartEntity));
  }

  async update(motorcyclePart: MotorcyclePart): Promise<void> {
      const updatedMotorcyclePartEntity = await MotorcyclePartModel.findOneAndUpdate(
          { _id: new Types.ObjectId(motorcyclePart.id) },
          { $set: motorcyclePart },  
          { new: true }            
        );
    
            if (!updatedMotorcyclePartEntity) {
          throw new Error('motorcycle Part not found for update');
        }
    
        //return MotorcyclePartMapper.toDomain(updatedMotorcyclePartEntity);
  }

  async delete(id: string): Promise<void> {
    await MotorcyclePartModel.deleteOne({ _id: new ObjectId(id) });
  }
}

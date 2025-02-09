import { MotorcycleModel } from '../../../../domain/entities/motorcycle-model.entity';
import { MotorcycleModelModel } from '../persistence/entities/motorcycle-model.entity-mongodb'; 
import { MotorcycleModelMapper } from '../persistence/mappers/motorcycle-model.mapper-mongodb'; 
import { IMotorcycleModelRepository } from '../../../../application/repositories/motorcycle-model.repository';
import Name from '../../../../domain/value-objects/name.vo';
import { ObjectId } from 'mongodb';
import mongoose from "mongoose";


export class MotorcycleModelRepositoryMongoDB implements IMotorcycleModelRepository {

  async findById(id: string): Promise<MotorcycleModel | null> {
    const motorcycleModelEntity = await MotorcycleModelModel.findById(new mongoose.Types.ObjectId(id));
    return motorcycleModelEntity ? MotorcycleModelMapper.toDomain(motorcycleModelEntity) : null;
  }

  async findByName(name: Name): Promise<MotorcycleModel | null> {
    const motorcycleModelEntity = await MotorcycleModelModel.findOne({ name: name.value });
    return motorcycleModelEntity ? MotorcycleModelMapper.toDomain(motorcycleModelEntity) : null;
  }
  
  async findAll(): Promise<MotorcycleModel[]> {
    const motorcycleModels = await MotorcycleModelModel.find();
    return motorcycleModels.map((model) => MotorcycleModelMapper.toDomain(model));
  }

  async save(motorcycleModel: MotorcycleModel): Promise<MotorcycleModel> {
    const motorcycleModelEntity = MotorcycleModelMapper.toModel(motorcycleModel);
    const savedEntity = await motorcycleModelEntity.save();
    return MotorcycleModelMapper.toDomain(savedEntity);
  }

  async remove(id: string): Promise<void> {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error(`Invalid ObjectId format: ${id}`);
    }
    
    await MotorcycleModelModel.deleteOne({ _id: new mongoose.Types.ObjectId(id) });
  }
}

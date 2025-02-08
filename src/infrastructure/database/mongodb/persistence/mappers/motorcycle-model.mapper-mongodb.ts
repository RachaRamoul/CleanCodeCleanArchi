import mongoose from 'mongoose';
import { MotorcycleModel } from '../../../../../domain/entities/motorcycle-model.entity';
import Name from '../../../../../domain/value-objects/name.vo';
import { IMotorcycleModel, MotorcycleModelModel } from '../entities/motorcycle-model.entity-mongodb';

export class MotorcycleModelMapper {
  static toDomain(motorcycleModelEntity: IMotorcycleModel): MotorcycleModel {
    return new MotorcycleModel(
      motorcycleModelEntity.id,                
     new Name( motorcycleModelEntity.name),                     
     motorcycleModelEntity.maintenanceFrequencyInKilometers,   
    );
  }

  static toModel(motorcycleModel: MotorcycleModel): IMotorcycleModel {
    const objectId = motorcycleModel.id ? new mongoose.Types.ObjectId(motorcycleModel.id) : undefined;

    return new MotorcycleModelModel({
      _id: objectId,
      name: motorcycleModel.name.value,
      maintenanceFrequencyInKilometers: motorcycleModel.maintenanceFrequencyInKilometers
    });
  }
}

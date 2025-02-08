import { Motorcycle } from '../../../../../domain/entities/motorcycle.entity';
import { IMotorcycle } from '../entities/motorcycle.entity-mongodb';
import mongoose from 'mongoose';
import Mileage from '../../../../../domain/value-objects/mileage.vo';

export class MotorcycleMapper {
  static toDomain(motorcycleEntity: IMotorcycle): Motorcycle {
    return new Motorcycle(
      motorcycleEntity._id.toString(),
      motorcycleEntity.modelId.toString(),
      new Mileage(motorcycleEntity.mileage),
      motorcycleEntity.status,
      motorcycleEntity.companyId.toString()
    );
  }

  static toModel(motorcycle: Motorcycle): Partial<IMotorcycle> {
    return {
      _id: motorcycle.id
        ? new mongoose.Types.ObjectId(motorcycle.id)
        : new mongoose.Types.ObjectId(),

      modelId: new mongoose.Types.ObjectId(motorcycle.modelId),
      mileage: motorcycle.mileage.value,
      status: motorcycle.status,
      companyId: new mongoose.Types.ObjectId(motorcycle.companyId),
    };
  }
}
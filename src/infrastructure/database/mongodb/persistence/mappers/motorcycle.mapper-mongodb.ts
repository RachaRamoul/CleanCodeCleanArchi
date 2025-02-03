import { Motorcycle } from '../../../../../domain/entities/motorcycle.entity';
import { IMotorcycle, MotorcycleModel } from '../entities/motorcycle.entity-mongodb';
import mongoose from 'mongoose';

export class MotorcycleMapper {
  static toDomain(motorcycleEntity: IMotorcycle): Motorcycle {
    return new Motorcycle(
      motorcycleEntity._id.toString(),
      motorcycleEntity.modelId.toString(),
      motorcycleEntity.mileage,
      motorcycleEntity.status,
      motorcycleEntity.companyId.toString()
    );
  }

  static toModel(motorcycle: Motorcycle): Partial<IMotorcycle> {
    return {
      _id: motorcycle.id ? new mongoose.Types.ObjectId(motorcycle.id) : new mongoose.Types.ObjectId(), // ✅ Gère `_id`
      modelId: new mongoose.Types.ObjectId(motorcycle.modelId),
      mileage: motorcycle.mileage,
      status: motorcycle.status,
      companyId: new mongoose.Types.ObjectId(motorcycle.companyId),
    };
  }
}
import { Motorcycle } from '../../../../../domain/entities/motorcycle.entity';
import { MotorcycleMongoEntity } from '../entities/motorcycle.mongo.entity';

export class MotorcycleMapper {
  static toDomain(motorcycleEntity: MotorcycleMongoEntity): Motorcycle {
    return new Motorcycle(
      motorcycleEntity.motorcycleId,
      motorcycleEntity.modelId,
      motorcycleEntity.mileage,
      motorcycleEntity.status as 'AVAILABLE' | 'IN_MAINTENANCE' | 'RENTED' | 'DECOMMISSIONED',
      motorcycleEntity.companyId
    );
  }

  static toModel(motorcycle: Motorcycle): MotorcycleMongoEntity {
    const motorcycleEntity = new MotorcycleMongoEntity();
    motorcycleEntity.motorcycleId = motorcycle.motorcycleId;
    motorcycleEntity.modelId = motorcycle.modelId;
    motorcycleEntity.mileage = motorcycle.mileage;
    motorcycleEntity.status = motorcycle.status;
    motorcycleEntity.companyId = motorcycle.companyId;
    return motorcycleEntity;
  }
}

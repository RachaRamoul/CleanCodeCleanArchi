import { Motorcycle } from '../../../../../domain/entities/motorcycle.entity'
import { MotorcyclePostgresEntity } from '../entities/motorcycle.postgres.entity'

export class MotorcycleMapper {
  static toDomain(motorcycleEntity: MotorcyclePostgresEntity): Motorcycle {
    return new Motorcycle(
      motorcycleEntity.motorcycleId,
      motorcycleEntity.modelId,
      motorcycleEntity.mileage,
      motorcycleEntity.status,
      motorcycleEntity.companyId
    );
  }

  static toModel(motorcycle: Motorcycle): MotorcyclePostgresEntity {
    const motorcycleEntity = new MotorcyclePostgresEntity();
    motorcycleEntity.modelId = motorcycle.modelId;
    motorcycleEntity.mileage = motorcycle.mileage;
    motorcycleEntity.status = motorcycle.status;
    motorcycleEntity.companyId = motorcycle.companyId;
    return motorcycleEntity;
  }
}

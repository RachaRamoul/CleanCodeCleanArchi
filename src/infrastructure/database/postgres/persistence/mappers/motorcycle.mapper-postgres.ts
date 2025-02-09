import { Motorcycle } from "../../../../../domain/entities/motorcycle.entity";
import { MotorcyclePostgresEntity } from "../entities/motorcycle.entity-postgres";
import Mileage from "../../../../../domain/value-objects/mileage.vo";

export class MotorcycleMapper {
  static toDomain(entity: MotorcyclePostgresEntity): Motorcycle {
    return new Motorcycle(
      entity.id,
      entity.modelId,
      new Mileage(entity.mileage),
      entity.status,
      entity.companyId
    );
  }

  static toModel(motorcycle: Motorcycle): MotorcyclePostgresEntity {
    const motorcycleEntity = new MotorcyclePostgresEntity();

    motorcycleEntity.id = motorcycle.id;
    motorcycleEntity.modelId = motorcycle.modelId;
    motorcycleEntity.mileage = motorcycle.mileage.value;
    motorcycleEntity.status = motorcycle.status;
    motorcycleEntity.companyId = motorcycle.companyId;

    return motorcycleEntity;
  }
}
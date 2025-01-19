import { MotorcyclePartPostgresEntity } from "../entities/motorcycle-part.postgres.entity";
import { MotorcyclePart } from "../../../../../domain/entities/motorcycle-part.entity";

export class MotorcyclePartMapper {
  static toDomain(entity: MotorcyclePartPostgresEntity): MotorcyclePart {
    return new MotorcyclePart(
      entity.id,
      entity.name,
      entity.description, 
      entity.stockQuantity,
      Number(entity.cost), 
      entity.lowStockAlert
    );
  }

  static toModel(motorcyclePart: MotorcyclePart): MotorcyclePartPostgresEntity {
    return new MotorcyclePartPostgresEntity(motorcyclePart);
  }
}

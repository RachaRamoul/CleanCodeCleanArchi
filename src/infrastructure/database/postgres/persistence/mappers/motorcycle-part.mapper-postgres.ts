import { MotorcyclePart } from "../../../../../domain/entities/motorcycle-part.entity";
import { MotorcyclePartPostgresEntity } from "../entities/motorcycle-part.entity-postgres";

export class MotorcyclePartMapper {
  static toDomain(entity: MotorcyclePartPostgresEntity): MotorcyclePart {
    return new MotorcyclePart(
      entity.id,
      entity.name,
      entity.description,
      entity.stockQuantity,
      entity.cost,
      entity.lowStockAlert
    );
  }

  static toModel(motorcyclePart: MotorcyclePart): Partial<MotorcyclePartPostgresEntity> {
    return new MotorcyclePartPostgresEntity(motorcyclePart);
  }
}
import { MotorcyclePartPostgresEntity } from "../entities/motorcycle-part.postgres.entity";
import { MotorcyclePart } from "../../../../../domain/entities/motorcycle-part.entity";

export class MotorcyclePartMapper {
  static toDomain(entity: MotorcyclePartPostgresEntity): MotorcyclePart {
    return new MotorcyclePart(
      entity.partId,
      entity.name,
      entity.description, 
      entity.stockQuantity,
      Number(entity.cost), 
      entity.lowStockAlert
    );
  }

  static toPersistence(domain: MotorcyclePart): MotorcyclePartPostgresEntity {
    return new MotorcyclePartPostgresEntity(
      domain.partId,
      domain.name,
      Number(domain.cost),
      domain.stockQuantity,
      domain.lowStockAlert,
      domain.description 
    );
  }
}

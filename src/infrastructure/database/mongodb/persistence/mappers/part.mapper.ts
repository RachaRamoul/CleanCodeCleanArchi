import { Part } from '../../../../../domain/entities/part.entity';
import { IPart, PartModel } from '../entities/part.entity-mongodb';

export class PartMapper {
  static toDomain(partEntity: IPart): Part {
    return new Part(
      partEntity.partId,       // partId
      partEntity.name,         // name
      partEntity.description,  // description
      partEntity.stockQuantity,// stockQuantity
      partEntity.cost,         // cost
      partEntity.lowStockAlert // lowStockAlert
    );
  }

  static toModel(part: Part): IPart {
    return new PartModel(part);
  }
}

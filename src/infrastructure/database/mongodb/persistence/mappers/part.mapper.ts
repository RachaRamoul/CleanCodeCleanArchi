import { Part } from '../../../../../domain/entities/part.entity';
import { IPart, PartModel } from '../entities/part.entity-mongodb';

export class PartMapper {
  static toDomain(partEntity: IPart): Part {
    return new Part(
      partEntity.partId,       
      partEntity.name,         
      partEntity.description, 
      partEntity.stockQuantity,
      partEntity.cost,         
      partEntity.lowStockAlert 
    );
  }

  static toModel(part: Part): IPart {
    return new PartModel(part);
  }
}

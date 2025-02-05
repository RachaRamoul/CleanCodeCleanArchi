import { MotorcyclePart } from '../../../../../domain/entities/motorcycle-part.entity';
import { IMotorcyclePart, MotorcyclePartModel } from '../entities/motorcycle-part.entity-mongodb';

export class MotorcyclePartMapper {
  static toDomain(MotorcyclePartEntity: IMotorcyclePart): MotorcyclePart {
    return new MotorcyclePart(
      MotorcyclePartEntity._id.toString(),       
      MotorcyclePartEntity.name,         
      MotorcyclePartEntity.description ? MotorcyclePartEntity.description : '' , 
      MotorcyclePartEntity.stockQuantity,
      MotorcyclePartEntity.cost,         
      MotorcyclePartEntity.lowStockAlert 
    );
  }

  static toModel(motorcyclePart: MotorcyclePart): IMotorcyclePart {
    return new MotorcyclePartModel(motorcyclePart);
  }
}

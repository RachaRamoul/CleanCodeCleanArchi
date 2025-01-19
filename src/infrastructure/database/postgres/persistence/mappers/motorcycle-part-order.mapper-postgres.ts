import { MotorcyclePartOrderPostgresEntity } from "../entities/motorcycle-part-order.entity-postgres";
import { MotorcyclePartOrder } from "../../../../../domain/entities/motorcycle-part-order.entity";

export class MotorcyclePartOrderMapper {
  static toDomain(motorcyclePartOrderEntity: MotorcyclePartOrderPostgresEntity): MotorcyclePartOrder {
    return new MotorcyclePartOrder(
      motorcyclePartOrderEntity.id,
      motorcyclePartOrderEntity.motorcyclePartId,
      Number(motorcyclePartOrderEntity.cost), 
      new Date(motorcyclePartOrderEntity.orderDate), 
      new Date(motorcyclePartOrderEntity.deliveryDate) 
    );
  }

  static toModel(motorcyclePartOrder: MotorcyclePartOrder): MotorcyclePartOrderPostgresEntity {
    return new MotorcyclePartOrderPostgresEntity(motorcyclePartOrder);
  }
}

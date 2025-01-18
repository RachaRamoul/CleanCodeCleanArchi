import { MotorcyclePartOrderPostgresEntity } from "../entities/motorcycle-part-order.postgres.entity";
import { MotorcyclePartOrder } from "../../../../../domain/entities/motorcycle-part-order.entity";

export class MotorcyclePartOrderMapper {
  static toDomain(motorcyclePartOrderEntity: MotorcyclePartOrderPostgresEntity): MotorcyclePartOrder {
    return new MotorcyclePartOrder(
      motorcyclePartOrderEntity.orderId,
      motorcyclePartOrderEntity.motorcyclePart,
      Number(motorcyclePartOrderEntity.cost), 
      new Date(motorcyclePartOrderEntity.orderDate), 
      new Date(motorcyclePartOrderEntity.deliveryDate) 
    );
  }

  static toPersistence(domain: MotorcyclePartOrder): MotorcyclePartOrderPostgresEntity {
    return new MotorcyclePartOrderPostgresEntity({
      orderId: domain.orderId,
      motorcyclePart: domain.motorcyclePart,
      cost: domain.cost, 
      orderDate: domain.orderDate,
      deliveryDate: domain.deliveryDate 
    });
  }
}

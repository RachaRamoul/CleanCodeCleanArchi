import { PartOrder } from '../../../../../domain/entities/part-order.entity';
import { IPartOrder, PartOrderModel } from '../entities/part-order.entity-mongodb';

export class PartOrderMapper {
  static toDomain(partOrderEntity: IPartOrder): PartOrder {
    return new PartOrder(
      partOrderEntity.orderId,       // orderId
      partOrderEntity.motorcyclePartId, // motorcyclePartId
      partOrderEntity.orderDate,     // orderDate
      partOrderEntity.cost,          // cost
      partOrderEntity.deliveryDate  // deliveryDate
    );
  }

  static toModel(partOrder: PartOrder): IPartOrder {
    return new PartOrderModel(partOrder);
  }
}

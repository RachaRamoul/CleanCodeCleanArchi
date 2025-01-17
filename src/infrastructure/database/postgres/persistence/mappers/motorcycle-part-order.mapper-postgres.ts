import { MotorcyclePartOrderPostgresEntity } from "../entities/motorcycle-part-order.postgres.entity";
import { MotorcyclePartOrder } from "../../../../../domain/entities/motorcycle-part-order.entity";
import { MotorcyclePartPostgresEntity } from "../entities/motorcycle-part.postgres.entity";

export class MotorcyclePartOrderMapper {
  // Convertir une entité PostgreSQL en entité du domaine
  static toDomain(motorcyclePartOrderEntity: MotorcyclePartOrderPostgresEntity): MotorcyclePartOrder {
    return new MotorcyclePartOrder(
      motorcyclePartOrderEntity.orderId,
      motorcyclePartOrderEntity.motorcyclePart,
      Number(motorcyclePartOrderEntity.cost), // Conversion si nécessaire pour `decimal`
      new Date(motorcyclePartOrderEntity.orderDate), // Conversion explicite en Date
      new Date(motorcyclePartOrderEntity.deliveryDate) // Conversion explicite en Date
    );
  }

  // Convertir une entité du domaine en entité PostgreSQL
  static toPersistence(domain: MotorcyclePartOrder): MotorcyclePartOrderPostgresEntity {
    return new MotorcyclePartOrderPostgresEntity({
      orderId: domain.orderId,
      motorcyclePart: domain.motorcyclePart,
      cost: domain.cost, // Doit rester un `number`
      orderDate: domain.orderDate, // Directement une instance de Date
      deliveryDate: domain.deliveryDate // Directement une instance de Date
    });
  }
}

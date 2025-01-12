import { Entity, Column, PrimaryGeneratedColumn, ObjectIdColumn } from 'typeorm';
import { MotorcyclePartOrder } from '../../../../../domain/entities/motorcycle-part-order.entity';
import { MotorcyclePartMongoEntity } from './motorcycle-part.mongo.entity';  // Assume the MotorcyclePart entity is defined separately for MongoDB

@Entity('motorcycle_part_orders')
export class MotorcyclePartOrderMongoEntity implements MotorcyclePartOrder {
  @PrimaryGeneratedColumn('uuid')
  orderId!: string;

  @ObjectIdColumn()
  _id?: string;

  @Column(() => MotorcyclePartMongoEntity)
  motorcyclePart!: MotorcyclePartMongoEntity;

  @Column()
  orderDate!: Date;

  @Column()
  cost!: number;

  @Column()
  deliveryDate!: Date;
}

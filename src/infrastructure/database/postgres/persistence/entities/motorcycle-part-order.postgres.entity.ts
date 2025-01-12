import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { MotorcyclePartOrder } from '../../../../../domain/entities/motorcycle-part-order.entity';
import { MotorcyclePartPostgresEntity } from './motorcycle-part.postgres.entity';  // Assume the MotorcyclePart entity is defined separately for PostgreSQL

@Entity('motorcycle_part_orders')
export class MotorcyclePartOrderPostgresEntity implements MotorcyclePartOrder {
  @PrimaryGeneratedColumn('uuid')
  orderId!: string;

  @OneToOne(() => MotorcyclePartPostgresEntity)
  @JoinColumn()
  motorcyclePart!: MotorcyclePartPostgresEntity;

  @Column()
  orderDate!: Date;

  @Column()
  cost!: number;

  @Column()
  deliveryDate!: Date;
}

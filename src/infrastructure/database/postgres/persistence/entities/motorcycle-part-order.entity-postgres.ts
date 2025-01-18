import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { MotorcyclePartOrder } from '../../../../../domain/entities/motorcycle-part-order.entity';

@Entity('motorcycle_part_orders')
export class MotorcyclePartOrderPostgresEntity extends MotorcyclePartOrder{
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  motorcyclePartId!: string;

  @Column('decimal')
  cost!: number; 

  @Column({ type: 'timestamp' })
  orderDate!: Date; 

  @Column({ type: 'timestamp' })
  deliveryDate!: Date; 

  constructor(partial?: Partial<MotorcyclePartOrderPostgresEntity>) {
    if (partial) {
      super(
        partial.id || '', 
        partial.motorcyclePartId || '', 
        partial.cost || 0, 
        partial.orderDate || new Date(), 
        partial.deliveryDate || new Date()
      ); 
      Object.assign(this, partial);
    } else {
      super('', '', 0, new Date(), new Date());
    }
  }
}

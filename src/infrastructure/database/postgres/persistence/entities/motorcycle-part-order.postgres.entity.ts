import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { MotorcyclePartPostgresEntity } from './motorcycle-part.postgres.entity';

@Entity('motorcycle_part_orders')
export class MotorcyclePartOrderPostgresEntity {
  @PrimaryGeneratedColumn('uuid')
  orderId!: string;

  @ManyToOne(() => MotorcyclePartPostgresEntity)
  @JoinColumn({ name: 'motorcyclePartId' })
  motorcyclePart!: MotorcyclePartPostgresEntity;

  @Column('decimal')
  cost!: number; // Reste inchangé

  @Column({ type: 'timestamp' })
  orderDate!: Date; // Doit être un `Date`

  @Column({ type: 'timestamp' })
  deliveryDate!: Date; // Doit être un `Date`

  constructor(partial?: Partial<MotorcyclePartOrderPostgresEntity>) {
    if (partial) {
      Object.assign(this, partial);
    }
  }
}

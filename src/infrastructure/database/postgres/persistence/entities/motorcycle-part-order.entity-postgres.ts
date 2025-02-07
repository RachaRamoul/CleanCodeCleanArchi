import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity('motorcycle_part_orders')
export class MotorcyclePartOrderPostgresEntity {
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
      Object.assign(this, partial);
    }
  }
}

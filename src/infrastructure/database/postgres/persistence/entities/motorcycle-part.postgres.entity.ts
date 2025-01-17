import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { MotorcyclePart } from '../../../../../domain/entities/motorcycle-part.entity';

@Entity('motorcycle_parts')
export class MotorcyclePartPostgresEntity implements MotorcyclePart {
  @PrimaryGeneratedColumn('uuid')
  partId!: string;

  @Column()
  name!: string;

  @Column('decimal')
  cost!: number;

  @Column('int')
  stockQuantity!: number;

  @Column({ type: 'boolean' })
  lowStockAlert!: boolean;

  @Column({ type: 'text', default: '' })
  description!: string;

  constructor(
    partId: string,
    name: string,
    cost: number,
    stockQuantity: number,
    lowStockAlert: boolean,
    description: string
  ) {
    this.partId = partId;
    this.name = name;
    this.cost = cost;
    this.stockQuantity = stockQuantity;
    this.lowStockAlert = lowStockAlert;
    this.description = description;
  }
}

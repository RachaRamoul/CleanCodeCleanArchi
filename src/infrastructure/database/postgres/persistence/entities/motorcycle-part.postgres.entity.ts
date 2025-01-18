import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { MotorcyclePart } from '../../../../../domain/entities/motorcycle-part.entity';

@Entity('motorcycle_parts')
export class MotorcyclePartPostgresEntity implements MotorcyclePart {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  name!: string;

  @Column('decimal')
  cost!: number;

  @Column('int')
  stockQuantity!: number;

  @Column({ type: 'int' })
  lowStockAlert!: number;

  @Column({ default: '' })
  description!: string;

  constructor(partial?: Partial<MotorcyclePartPostgresEntity>) {
    if (partial) {
      Object.assign(this, partial);
    }
  }
}

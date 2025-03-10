import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('motorcycle_parts')
export class MotorcyclePartPostgresEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  name!: string;

  @Column()
  description!: string;

  @Column()
  stockQuantity!: number;

  @Column('decimal')
  cost!: number;

  @Column()
  lowStockAlert!: number;

  constructor(partial?: Partial<MotorcyclePartPostgresEntity>) {
    if (partial) {
      Object.assign(this, partial);
    }
  }
}
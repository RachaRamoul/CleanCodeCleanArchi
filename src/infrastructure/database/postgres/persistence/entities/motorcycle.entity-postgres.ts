import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Motorcycle } from '../../../../../domain/entities/motorcycle.entity'

@Entity('motorcycles')
export class MotorcyclePostgresEntity implements Motorcycle {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  motorcycleId!: string;

  @Column()
  modelId!: string;

  @Column()
  mileage!: number;

  @Column()
  status!: 'AVAILABLE' | 'IN_MAINTENANCE' | 'RENTED' | 'DECOMMISSIONED';

  @Column()
  companyId!: string;

  constructor(partial?: Partial<MotorcyclePostgresEntity>) {
    if (partial) {
      Object.assign(this, partial);
    }
  }
}

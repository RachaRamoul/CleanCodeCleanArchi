import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('motorcycles')
export class MotorcyclePostgresEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

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

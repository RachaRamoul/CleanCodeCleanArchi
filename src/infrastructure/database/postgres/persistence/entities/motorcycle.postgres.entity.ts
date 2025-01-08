// src/infrastructure/database/postgres/persistence/entities/motorcycle.postgres.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Motorcycle } from '../../../../../domain/entities/motorcycle.entity'

@Entity('motorcycles')
export class MotorcyclePostgresEntity implements Motorcycle {
  @PrimaryGeneratedColumn('uuid')
  id!: string; // Identifiant unique généré pour PostgreSQL

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
}

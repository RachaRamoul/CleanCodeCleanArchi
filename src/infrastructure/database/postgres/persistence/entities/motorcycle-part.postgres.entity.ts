// src/infrastructure/database/postgres/persistence/entities/motorcycle-part.postgres.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { MotorcyclePart } from '../../../../../domain/entities/motorcycle-part.entity';

@Entity('motorcycle_parts')
export class MotorcyclePartPostgresEntity implements MotorcyclePart {
  @PrimaryGeneratedColumn('uuid')
  id!: string; // Identifiant unique généré pour PostgreSQL

  @Column()
  partId!: string;

  @Column()
  name!: string;

  @Column({ nullable: true })
  description?: string;

  @Column()
  stockQuantity!: number;

  @Column()
  cost!: number;

  @Column()
  lowStockAlert!: boolean;
}
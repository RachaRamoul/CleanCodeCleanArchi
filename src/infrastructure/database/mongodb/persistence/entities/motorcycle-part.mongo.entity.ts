// src/infrastructure/database/mongodb/persistence/entities/motorcycle-part.mongo.entity.ts
import { Entity, Column, ObjectIdColumn } from 'typeorm';
import { MotorcyclePart } from '../../../../../domain/entities/motorcycle-part.entity';

@Entity('motorcycle_parts')
export class MotorcyclePartMongoEntity implements MotorcyclePart {
  @ObjectIdColumn()
  _id?: string; // Identifiant unique MongoDB

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

// src/infrastructure/database/mongodb/persistence/entities/motorcycle.mongo.entity.ts
import { Entity, Column, ObjectIdColumn } from 'typeorm';
import { Motorcycle } from '../../../../../domain/entities/motorcycle.entity';

@Entity('motorcycles')
export class MotorcycleMongoEntity implements Motorcycle {
  @ObjectIdColumn()
  _id?: string; // Identifiant unique MongoDB

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

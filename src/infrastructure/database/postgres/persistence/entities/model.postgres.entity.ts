import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Model } from '../../../../../domain/entities/model.entity';

@Entity('models')
export default class ModelPostgresEntity implements Model {
  @PrimaryGeneratedColumn('uuid')
  modelId!: string;

  @Column()
  name!: string;

  @Column()
  manufacturer!: string;

  @Column()
  maintenanceFrequency!: number;

  constructor(partial?: Partial<ModelPostgresEntity>) {
    if (partial) {
      Object.assign(this, partial);
    }
  }
}

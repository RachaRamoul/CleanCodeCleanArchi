import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Model } from '../../../../../domain/entities/model.entity';

@Entity('models')
export class ModelPostgresEntity implements Model {
  @PrimaryGeneratedColumn('uuid')
  modelId!: string;

  @Column()
  name!: string;

  @Column()
  maintenanceFrequency!: number; // in km
}

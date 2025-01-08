import { Entity, Column, PrimaryGeneratedColumn, ObjectIdColumn } from 'typeorm';
import { Model } from '../../../../../domain/entities/model.entity';

@Entity('models')
export class ModelMongoEntity implements Model {
  @PrimaryGeneratedColumn('uuid')
  modelId!: string;

  @ObjectIdColumn()
  _id?: string;

  @Column()
  name!: string;

  @Column()
  maintenanceFrequency!: number; // in km
}

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('models')
export default class ModelPostgresEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

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

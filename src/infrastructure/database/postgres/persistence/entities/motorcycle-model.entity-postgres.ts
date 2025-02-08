import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('models')
export default class MotorcycleModelPostgresEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  name!: string;

  @Column()
  maintenanceFrequencyInKilometers!: number;

  constructor(partial?: Partial<MotorcycleModelPostgresEntity>) {
    if (partial) {
      Object.assign(this, partial);
    }
  }
}

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('maintenances')
export class MaintenancePostgresEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  motorcycleId!: string;

  @Column()
  partId!: string;

  @Column()
  maintenanceType!: string;

  @Column()
  recommendations!: string;

  @Column('decimal')
  cost!: number;

  @Column()
  date!: Date;

  constructor(partial?: Partial<MaintenancePostgresEntity>) {
    if (partial) {
      Object.assign(this, partial);
    }
  }
}

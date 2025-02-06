import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('motorcycle_ride_tests')
export default class MotorcycleRideTestPostgresEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;  

  @Column()
  motorcycleId!: string; 

  @Column()
  driverId!: string; 

  @Column()
  date!: Date;

  @Column()
  testDuration!: number; 

  @Column()
  incidentReportId!: string; 

  constructor(partial?: Partial<MotorcycleRideTestPostgresEntity>) {
    if (partial) {
      Object.assign(this, partial);
    }
  }
}

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { MotorcycleRideTest } from '../../../../../domain/entities/motorcycle-ride-test.entity';

@Entity('motorcycle_ride_tests')
export default class MotorcycleRideTestPostgresEntity implements MotorcycleRideTest {
  @PrimaryGeneratedColumn('uuid')
  motorcycleRideTestId!: string;  

  @Column()
  motorcycleId!: string; 

  @Column()
  driverId!: string; 

  @Column()
  date!: Date;

  @Column()
  testDuration!: number; 

  @Column()
  incidentReport!: string; 

  constructor(partial?: Partial<MotorcycleRideTestPostgresEntity>) {
    if (partial) {
      Object.assign(this, partial);
    }
  }
}

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { MotorcycleRideTest } from '../../../../../domain/entities/motorcycle-ride-test.entity';

@Entity('motorcycle_ride_tests')
export default class MotorcycleRideTestPostgresEntity implements MotorcycleRideTest {
  @PrimaryGeneratedColumn('uuid')
  motorcycleRideTestId!: string;  // Correspond à motorcycleRideTestId dans le domaine

  @Column()
  motorcycleId!: string; // Référence à Motorcycle

  @Column()
  driverId!: string; // Ajout du driverId

  @Column()
  date!: Date;

  @Column()
  testDuration!: number; // Ajout de la durée du test (en heures)

  @Column()
  incidentReport!: string; // Ajout du rapport d'incident

  constructor(partial?: Partial<MotorcycleRideTestPostgresEntity>) {
    if (partial) {
      Object.assign(this, partial);
    }
  }
}

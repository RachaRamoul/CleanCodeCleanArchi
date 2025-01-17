import { MotorcycleRideTest } from '../../domain/entities/motorcycle-ride-test.entity';

export interface IMotorcycleRideTestRepository {
  findById(id: string): Promise<MotorcycleRideTest | null>;
  save(motorcycleRideTest: MotorcycleRideTest): Promise<MotorcycleRideTest>;
  listMotorcycleRideTests(): Promise<MotorcycleRideTest[]>;
  removeMotorcycleRideTest(id: string): Promise<void>;
}

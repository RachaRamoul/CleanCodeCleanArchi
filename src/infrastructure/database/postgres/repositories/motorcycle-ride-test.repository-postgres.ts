import { Repository } from 'typeorm';
import { AppDataSource } from '../postgres.config';
import MotorcycleRideTestPostgresEntity from '../persistence/entities/motorcycle-ride-test.entity-postgres';
import { IMotorcycleRideTestRepository } from '../../../../application/repositories/motorcycle-ride-test.repository';

export class MotorcycleRideTestRepositoryPostgres implements IMotorcycleRideTestRepository{
  private repository: Repository<MotorcycleRideTestPostgresEntity>;

  constructor() {
    this.repository = AppDataSource.getRepository(MotorcycleRideTestPostgresEntity);
  }

  async create(rideTest: MotorcycleRideTestPostgresEntity): Promise<MotorcycleRideTestPostgresEntity> {
    return this.repository.save(rideTest);
  }

  async findById(rideTestId: string): Promise<MotorcycleRideTestPostgresEntity | null> {
    return this.repository.findOne({
      where: { id: rideTestId },
    });
  }

  async findAll(): Promise<MotorcycleRideTestPostgresEntity[]> {
    return this.repository.find();
  }

  async update(
    rideTestId: string,
    updateData: Partial<MotorcycleRideTestPostgresEntity>
  ): Promise<void> {
    await this.repository.update(rideTestId, updateData);
  }

  async delete(rideTestId: string): Promise<void> {
    await this.repository.delete(rideTestId);
  }

  async findByMotorcycleId(motorcycleId: string): Promise<MotorcycleRideTestPostgresEntity[]> {
    return this.repository.find({
      where: { motorcycleId },
    });
  }

  async findByDriverId(driverId: string): Promise<MotorcycleRideTestPostgresEntity[]> {
    return this.repository.find({
      where: { driverId },
    });
  }
}

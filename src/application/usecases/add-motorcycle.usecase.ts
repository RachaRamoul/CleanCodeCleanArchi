import { IMotorcycleRepository } from '../repositories/motorcycle.repository';
import { Motorcycle } from '../../domain/entities/motorcycle.entity';

export class AddMotorcycleUseCase {
  constructor(private repository: IMotorcycleRepository) {}

  async execute(modelId: string, mileage: number, status: 'AVAILABLE' | 'IN_MAINTENANCE' | 'RENTED' | 'DECOMMISSIONED', companyId: string): Promise<void> {
    const motorcycle = new Motorcycle('', modelId, mileage, status, companyId);
    await this.repository.save(motorcycle);
  }
}

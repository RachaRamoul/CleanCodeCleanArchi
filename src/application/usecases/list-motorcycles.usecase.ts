import { Motorcycle } from '../../domain/entities/motorcycle.entity';
import { IMotorcycleRepository } from '../repositories/motorcycle.repository';

export class ListMotorcyclesUseCase {
  constructor(private repository: IMotorcycleRepository) {}

  async execute(): Promise<Motorcycle[]> {
    return await this.repository.listMotorcycles();
  }
}

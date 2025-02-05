import { MotorcyclePart } from '../../../domain/entities/motorcycle-part.entity';
import { IMotorcyclePartRepository } from '../../repositories/motorcycle-part.repository';

export class GetAllMotorcyclePartsUseCase {
  constructor(private motorcyclePartRepository: IMotorcyclePartRepository) {}

  async execute(): Promise<MotorcyclePart[]> {
    return this.motorcyclePartRepository.getAll();
  }
}
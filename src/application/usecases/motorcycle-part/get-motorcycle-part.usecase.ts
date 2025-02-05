import { MotorcyclePart } from '../../../domain/entities/motorcycle-part.entity';
import { IMotorcyclePartRepository } from '../../repositories/motorcycle-part.repository';

export class GetMotorcyclePartUseCase {
  constructor(private motorcyclePartRepository: IMotorcyclePartRepository) {}

  async execute(id: string): Promise<MotorcyclePart | null> {
    return this.motorcyclePartRepository.findById(id);
  }
}
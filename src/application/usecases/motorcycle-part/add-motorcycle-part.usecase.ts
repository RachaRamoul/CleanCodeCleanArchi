import { MotorcyclePart } from '../../../domain/entities/motorcycle-part.entity';
import { IMotorcyclePartRepository } from '../../repositories/motorcycle-part.repository';

export class AddMotorcyclePartUseCase {
  constructor(private motorcyclePartRepository: IMotorcyclePartRepository) {}

  async execute(motorcyclePart: MotorcyclePart): Promise<void> {
    await this.motorcyclePartRepository.add(motorcyclePart);
  }
}
import { IMotorcyclePartRepository } from '../../repositories/motorcycle-part.repository';

export class DeleteMotorcyclePartUseCase {
  constructor(private motorcyclePartRepository: IMotorcyclePartRepository) {}

  async execute(id: string): Promise<void> {
    await this.motorcyclePartRepository.delete(id);
  }
}
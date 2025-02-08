import { IMotorcycleModelRepository } from "../../repositories/motorcycle-model.repository";

export class RemoveMotorcycleModelUseCase {
  constructor(private motorcycleModelRepository: IMotorcycleModelRepository) {}

  async execute(id: string): Promise<void> {
    
    const motorcycleModel = await this.motorcycleModelRepository.findById(id);
    if (!motorcycleModel) {
        throw new Error(`Motorcycle model with this id ${id} was not found.`);
    }

    await this.motorcycleModelRepository.remove(id);
  }
}

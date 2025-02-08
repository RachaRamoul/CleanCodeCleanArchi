import { MotorcycleModel } from "../../../domain/entities/motorcycle-model.entity";
import { IMotorcycleModelRepository } from "../../repositories/motorcycle-model.repository";

export class GetMotorcycleModelByIdUseCase {
  constructor(private motorcycleModelRepository: IMotorcycleModelRepository) {}

  async execute(id: string): Promise<MotorcycleModel> {
    const motorcycleModel = await this.motorcycleModelRepository.findById(id);
    if (!motorcycleModel) {
      throw new Error(`MotorcycleModel with this id ${id} was not found.`);
    }
    return motorcycleModel;
  }
}

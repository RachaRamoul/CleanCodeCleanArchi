import { MotorcycleModel } from "../../../domain/entities/motorcycle-model.entity";
import Name from "../../../domain/value-objects/name.vo";
import { IMotorcycleModelRepository } from "../../repositories/motorcycle-model.repository";

export class GetMotorcycleModelByNameUseCase {
  constructor(private motorcycleModelRepository: IMotorcycleModelRepository) {}

  async execute(name: Name): Promise<MotorcycleModel> {
    const motorcycleModel = await this.motorcycleModelRepository.findByName(name);
    if (!motorcycleModel) {
      throw new Error(`Motorcycle model with this name ${name.value} was not found.`);
    }
    return motorcycleModel;
  }
}


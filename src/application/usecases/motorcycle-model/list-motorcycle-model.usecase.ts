import { MotorcycleModel } from "../../../domain/entities/motorcycle-model.entity";
import { IMotorcycleModelRepository } from "../../repositories/motorcycle-model.repository";

export class ListMotorcycleModelsUseCase {
  constructor(private motorcycleModelRepository: IMotorcycleModelRepository) {}

  async execute(): Promise<MotorcycleModel[]> {
    return await this.motorcycleModelRepository.findAll();
  }
}

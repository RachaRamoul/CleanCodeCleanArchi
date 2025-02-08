import Name from "../../../domain/value-objects/name.vo";
import { MotorcycleModel } from "../../../domain/entities/motorcycle-model.entity";
import { IMotorcycleModelRepository } from "../../repositories/motorcycle-model.repository";

export class AddMotorcycleModelUseCase {
  constructor(private motorcycleModelRepository: IMotorcycleModelRepository) {}

  async execute(
    name: Name,
    maintenanceFrequencyInKilometers: number
  ): Promise<MotorcycleModel> {
    
    if (maintenanceFrequencyInKilometers === undefined || maintenanceFrequencyInKilometers === null  || !isNaN(maintenanceFrequencyInKilometers)) {
      throw new Error(`Invalid maintenance frequency (in kilometers) : ${maintenanceFrequencyInKilometers}`);
    }

    const existingMotorcycleModel = await this.motorcycleModelRepository.findByName(name);
    if (existingMotorcycleModel) {
      throw new Error("A motorcycle model with this name already exists.");
    }

    const motorcycleModel = new MotorcycleModel('', name, maintenanceFrequencyInKilometers);

    return await this.motorcycleModelRepository.save(motorcycleModel);
  }
}

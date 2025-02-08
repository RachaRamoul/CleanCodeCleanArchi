import { MotorcycleModel } from "../../../domain/entities/motorcycle-model.entity";
import { IMotorcycleModelRepository } from "../../repositories/motorcycle-model.repository";

export class UpdateMotorcycleModelUseCase {
  constructor(private motorcycleModelRepository: IMotorcycleModelRepository) {}

  async execute(
    id: string,
    updateData: Partial<MotorcycleModel>,
  ): Promise<MotorcycleModel> {

    if (!updateData || Object.keys(updateData).length === 0) {
        throw new Error('No update data provided.');
    }

    if (
      updateData.maintenanceFrequencyInKilometers === undefined 
      || updateData.maintenanceFrequencyInKilometers === null  
      || !isNaN(updateData.maintenanceFrequencyInKilometers)) {
      throw new Error(`Invalid maintenance frequency (in kilometers) : ${updateData.maintenanceFrequencyInKilometers}`);
    }

    const motorcycleModel = await this.motorcycleModelRepository.findById(id);
    if (!motorcycleModel) {
      throw new Error(`Motorcycle model with this id ${id} was not found.`);
    }

    Object.assign(motorcycleModel, updateData);

    return await this.motorcycleModelRepository.save(motorcycleModel);
  }
}

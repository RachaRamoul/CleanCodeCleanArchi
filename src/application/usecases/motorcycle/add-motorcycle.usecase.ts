import { Motorcycle } from "../../../domain/entities/motorcycle.entity";
import { IMotorcycleRepository } from "../../repositories/motorcycle.repository";

export class AddMotorcycleUseCase {
  constructor(private repository: IMotorcycleRepository) {}

  async execute(
    motorcycleId: string,
    modelId: string,
    mileage: number,
    status: 'AVAILABLE' | 'IN_MAINTENANCE' | 'RENTED' | 'DECOMMISSIONED',
    companyId: string
  ): Promise<void> {
    const motorcycle = new Motorcycle(motorcycleId, modelId, mileage, status, companyId);

    await this.repository.save(motorcycle);
  }
}

import { Motorcycle } from "../../../domain/entities/motorcycle.entity";
import { IMotorcycleRepository } from "../../repositories/motorcycle.repository";

export class AddMotorcycleUseCase {
  constructor(private repository: IMotorcycleRepository) {}

  async execute(
    modelId: string,
    mileage: number,
    status: "AVAILABLE" | "IN_MAINTENANCE" | "RENTED" | "DECOMMISSIONED",
    companyId: string
  ): Promise<Motorcycle> {
    const motorcycle = new Motorcycle(undefined, modelId, mileage, status, companyId);
    return await this.repository.save(motorcycle);
  }
}
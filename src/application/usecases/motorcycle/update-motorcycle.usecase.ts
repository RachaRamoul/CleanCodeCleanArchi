import { IMotorcycleRepository } from "../../repositories/motorcycle.repository";
import { Motorcycle } from "../../../domain/entities/motorcycle.entity";

export class UpdateMotorcycleUseCase {
  constructor(private repository: IMotorcycleRepository) {}

  async execute(id: string, updateData: Partial<Motorcycle>): Promise<Motorcycle | null> {
    const motorcycle = await this.repository.findById(id);
    if (!motorcycle) return null;

    return await this.repository.update(id, updateData);
  }
}
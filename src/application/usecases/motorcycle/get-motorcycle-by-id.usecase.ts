import { IMotorcycleRepository } from "../../repositories/motorcycle.repository";
import { Motorcycle } from "../../../domain/entities/motorcycle.entity";

export class GetMotorcycleByIdUseCase {
  constructor(private repository: IMotorcycleRepository) {}

  async execute(id: string): Promise<Motorcycle | null> {
    return await this.repository.findById(id);
  }
}
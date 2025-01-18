import { IMotorcycleRepository } from "../../repositories/motorcycle.repository";
import { Motorcycle } from "../../../domain/entities/motorcycle.entity";

export class ListMotorcyclesUseCase {
  constructor(private repository: IMotorcycleRepository) {}

  /**
   * Exécute le use case pour récupérer toutes les motos.
   */
  async execute(): Promise<Motorcycle[]> {
    return await this.repository.findAll();
  }
}

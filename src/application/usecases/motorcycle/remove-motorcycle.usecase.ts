import { IMotorcycleRepository } from "../../repositories/motorcycle.repository";

export class RemoveMotorcycleUseCase {
  constructor(private repository: IMotorcycleRepository) {}

  async execute(id: string): Promise<void> {
    const motorcycle = await this.repository.findById(id);
    if (!motorcycle) throw new Error("Motorcycle not found");

    await this.repository.remove(id);
  }
}
import { IDriverRepository } from "../../repositories/driver.repository";

export class RemoveDriverUseCase {
  constructor(private driverRepository: IDriverRepository) {}

  async execute(id: string): Promise<void> {
    
    const driver = await this.driverRepository.findById(id);
    if (!driver) {
        throw new Error(`Driver with this id ${id} was not found.`);
    }

    await this.driverRepository.remove(id);
  }
}

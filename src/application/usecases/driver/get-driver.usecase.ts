import { Driver } from "../../../domain/entities/driver.entity";
import { IDriverRepository } from "../../repositories/driver.repository";

export class GetDriverByIdUseCase {
  constructor(private driverRepository: IDriverRepository) {}

  async execute(id: string): Promise<Driver> {
    const driver = await this.driverRepository.findById(id);
    if (!driver) {
      throw new Error(`Driver with this id ${id} was not found.`);
    }
    return driver;
  }
}

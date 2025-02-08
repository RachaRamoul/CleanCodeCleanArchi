import { Driver } from "../../../domain/entities/driver.entity";
import { IDriverRepository } from "../../repositories/driver.repository";

export class ListDriversUseCase {
  constructor(private driverRepository: IDriverRepository) {}

  async execute(companyId?: string): Promise<Driver[]> {
    if (companyId) {
      return await this.driverRepository.findByCompanyId(companyId);
    }
    return await this.driverRepository.findAll();
  }
}

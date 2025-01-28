import { Company } from "../../../domain/entities/company.entity";
import { ICompanyRepository } from "../../repositories/company.repository";

export class UpdateCompanyProfileUseCase {
  constructor(private companyRepository: ICompanyRepository) {}

  async execute(
    id: string,
    updateData: Partial<Company>,
  ): Promise<Company> {
    
    const company = await this.companyRepository.findById(id);
    if (!company) {
        throw new Error('Company not found.');
    }

    if (!updateData || Object.keys(updateData).length === 0) {
      throw new Error('No update data provided.');
    }

    Object.assign(company, updateData);

    return await this.companyRepository.update(company);
  }
}

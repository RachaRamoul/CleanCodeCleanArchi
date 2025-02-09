import PhoneNumberValidatorService from "../../../application/services/phone-number-validator.service";
import { Company } from "../../../domain/entities/company.entity";
import { ICompanyRepository } from "../../repositories/company.repository";

export class UpdateCompanyProfileUseCase {
  constructor(private companyRepository: ICompanyRepository) {}

  async execute(
    id: string,
    updateData: Partial<Company>,
  ): Promise<Company> {
    
    if (!updateData || Object.keys(updateData).length === 0) {
      throw new Error('No update data provided.');
    }
    if (updateData.number && !PhoneNumberValidatorService.isValid(updateData.number)) {
        throw new Error("Invalid number: Must only contain 10 digits.");
    }
    
    const company = await this.companyRepository.findById(id);
    if (!company) {
        throw new Error('Company not found.');
    }
    Object.assign(company, updateData);

    return await this.companyRepository.save(company);
  }
}

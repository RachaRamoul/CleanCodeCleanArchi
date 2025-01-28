import { Company } from "../../../domain/entities/company.entity";
import { ICompanyRepository } from "../../repositories/company.repository";

export class GetCompanyDetailsUseCase {
  constructor(private companyRepository: ICompanyRepository) {}

  async execute(
    id: string
  ): Promise<Company> {
    
    const company = await this.companyRepository.findById(id);
        if (!company) {
            throw new Error('Company not found.');
        }

        return company;
  }
}

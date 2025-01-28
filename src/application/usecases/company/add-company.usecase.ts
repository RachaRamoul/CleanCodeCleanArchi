import { Company } from "../../../domain/entities/company.entity";
import { ICompanyRepository } from "../../repositories/company.repository";

export class AddCompanyUseCase {
  constructor(private companyRepository: ICompanyRepository) {}

  async execute(
    name: string,
    email: string,
    number: string,
    siretNumber: string,
    isAdmin: boolean = false,
    password: string,
  ): Promise<Company> {
    
    const existingCompany = await this.companyRepository.findByEmail(email);
    if(existingCompany){
        throw new Error('A company with this email already exists.');
    }
    const company = new Company(undefined, name, email, number, siretNumber, isAdmin, password);

    return await this.companyRepository.save(company);
  }
}

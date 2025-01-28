import { Company } from "../../../domain/entities/company.entity";
import { ICompanyRepository } from "../../repositories/company.repository";

export class AuthenticateCompanyUseCase {
  constructor(private companyRepository: ICompanyRepository) {}

  async execute(
    email: string,
  ): Promise<Company> {
    
    const includePassword = true;

    const company = await this.companyRepository.findByEmail(email, includePassword);
    if(!company){
        throw new Error('Invalid email or password.');
    }
  
    return company;
  }
}

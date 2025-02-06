import SiretNumber from "../../../domain/value-objects/siret-number.vo";
import Email from "../../../domain/value-objects/email.vo";
import Name from "../../../domain/value-objects/name.vo";
import { Company } from "../../../domain/entities/company.entity";
import { ICompanyRepository } from "../../repositories/company.repository";
import NumberValidatorService  from "../../services/number-validator.service";

export class AddCompanyUseCase {
  constructor(private companyRepository: ICompanyRepository) {}

  async execute(
    name: Name,
    email: Email,
    number: string,
    siretNumber: SiretNumber,
    isAdmin: boolean = false,
    password: string,
  ): Promise<Company> {

    if (!NumberValidatorService.isValid(number)) {
        throw new Error("Invalid number: Must only contain 10 digits.");
    }
    
    const existingCompany = await this.companyRepository.findByEmail(email);
    if(existingCompany){
        throw new Error('A company with this email already exists.');
    }
    const company = new Company('', name, email, number, siretNumber, isAdmin, password);

    return await this.companyRepository.save(company);
  }
}

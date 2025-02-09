import SiretNumber from "../../../domain/value-objects/siret-number.vo";
import Email from "../../../domain/value-objects/email.vo";
import Name from "../../../domain/value-objects/name.vo";
import { Company } from "../../../domain/entities/company.entity";
import { ICompanyRepository } from "../../repositories/company.repository";
import PhoneNumberValidatorService  from "../../services/phone-number-validator.service";
import PasswordValidatorService from "../../services/password-validator.service";

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

    if (!PhoneNumberValidatorService.isValid(number)) {
        throw new Error("Invalid number: Must only contain 10 digits.");
    }

    if (!PasswordValidatorService.isValid(password)) {
        throw new Error(`Invalid password. The password must meet the following criteria:
                            - Minimum length of 8 characters
                            - At least one uppercase letter (A-Z)
                            - At least one lowercase letter (a-z)
                            - At least one number (0-9)
                            - At least one special character (!@#$%^&*(),.?":{}|<>)`);
    }
    
    const existingCompany = await this.companyRepository.findByEmail(email);
    if(existingCompany){
        throw new Error('A company with this email already exists.');
    }
    const company = new Company('', name, email, number, siretNumber, isAdmin, password);

    return await this.companyRepository.save(company);
  }
}

import Name from "../../../domain/value-objects/name.vo";
import { Driver } from "../../../domain/entities/driver.entity";
import { IDriverRepository } from "../../repositories/driver.repository";
import LicenseNumberValidatorService from "../../services/license-number-validator.service";
import { Company } from "../../../domain/entities/company.entity";
import PhoneNumberValidatorService from "../../services/phone-number-validator.service";

export class AddDriverUseCase {
  constructor(private driverRepository: IDriverRepository) {}

  async execute(
    firstName: Name,
    lastName: Name,
    company: Company,
    phoneNumber: string,
    licenseNumber: string,
    experienceYears: number
  ): Promise<Driver> {
    
    if (!LicenseNumberValidatorService.isValid(licenseNumber)) {
      throw new Error(`Invalid license number : ${licenseNumber}`);
    }

    if(!PhoneNumberValidatorService.isValid(phoneNumber)) {
        throw new Error(`Invalid phone number : ${phoneNumber}`);
    }

    if( experienceYears === undefined || experienceYears === null || !isNaN(experienceYears)  || experienceYears < 0 || experienceYears > 100) {
        throw new Error(`Invalid experience years : ${experienceYears}`);
    }

    const existingDriver = await this.driverRepository.findByLicenseNumber(licenseNumber);
    if (existingDriver) {
      throw new Error("A driver with this license number already exists.");
    }

    const driver = new Driver('', firstName, lastName, company, phoneNumber, licenseNumber, experienceYears);

    return await this.driverRepository.save(driver);
  }
}

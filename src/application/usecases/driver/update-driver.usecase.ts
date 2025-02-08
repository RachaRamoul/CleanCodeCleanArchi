import { Driver } from "../../../domain/entities/driver.entity";
import { IDriverRepository } from "../../repositories/driver.repository";
import LicenseNumberValidatorService from "../../services/license-number-validator.service";
import PhoneNumberValidatorService from '../../services/phone-number-validator.service';

export class UpdateDriverUseCase {
  constructor(private driverRepository: IDriverRepository) {}

  async execute(
    id: string,
    updateData: Partial<Driver>,
  ): Promise<Driver> {

    if (!updateData || Object.keys(updateData).length === 0) {
        throw new Error('No update data provided.');
    }

    if (updateData.licenseNumber && !LicenseNumberValidatorService.isValid(updateData.licenseNumber)) {
    throw new Error(`Invalid license number : ${updateData.licenseNumber}`);
    }

    if(updateData.phoneNumber && !PhoneNumberValidatorService.isValid(updateData.phoneNumber)) {
        throw new Error(`Invalid phone number : ${updateData.phoneNumber}`);
    }

    if(updateData.experienceYears !== undefined && (updateData.experienceYears < 0 || updateData.experienceYears > 100)) {
        throw new Error(`Invalid experience years : ${updateData.experienceYears}`);
    }

    const driver = await this.driverRepository.findById(id);
    if (!driver) {
      throw new Error("Driver not found.");
    }

    Object.assign(driver, updateData);

    return await this.driverRepository.save(driver);
  }
}

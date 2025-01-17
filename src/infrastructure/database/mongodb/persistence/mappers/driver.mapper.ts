import { Driver } from '../../../../../domain/entities/driver.entity';
import { IDriver, DriverModel } from '../entities/driver.entity-mongodb';

export class DriverMapper {
  static toDomain(driverEntity: IDriver): Driver {
    return new Driver(
      driverEntity.driverId,      // driverId
      driverEntity.companyId,     // companyId
      driverEntity.firstName,     // firstName
      driverEntity.lastName,      // lastName
      driverEntity.phoneNumber,   // phoneNumber
      driverEntity.licenseNumber, // licenseNumber
      driverEntity.experienceYears,// experienceYears
      driverEntity.incidentHistory// incidentHistory (path to image or PDF)
    );
  }

  static toModel(driver: Driver): IDriver {
    return new DriverModel(driver);
  }
}

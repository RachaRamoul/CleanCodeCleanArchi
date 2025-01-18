import { Driver } from '../../../../../domain/entities/driver.entity';
import { IDriver, DriverModel } from '../entities/driver.entity-mongodb';

export class DriverMapper {
  static toDomain(driverEntity: IDriver): Driver {
    return new Driver(
      driverEntity.id,
      driverEntity.firstName,
      driverEntity.lastName,
      driverEntity.companyId,
      driverEntity.phoneNumber,
      driverEntity.licenseNumber,
      driverEntity.experienceYears,
    );
  }
  

  static toModel(driver: Driver): IDriver {
    return new DriverModel(driver);
  }
}

import { Driver } from '../../../../../domain/entities/driver.entity';
import { IDriver, DriverModel } from '../entities/driver.entity-mongodb';

export class DriverMapper {
  static toDomain(driverEntity: IDriver): Driver {
    return new Driver(
      driverEntity.driverId,
      driverEntity.firstName,
      driverEntity.lastName,
      driverEntity.licenseNumber,
      driverEntity.experienceYears,
      Array.isArray(driverEntity.incidentHistory) ? driverEntity.incidentHistory : [driverEntity.incidentHistory], // Convertir en tableau si nécessaire
    );
  }
  

  static toModel(driver: Driver): IDriver {
    return new DriverModel(driver);
  }
}

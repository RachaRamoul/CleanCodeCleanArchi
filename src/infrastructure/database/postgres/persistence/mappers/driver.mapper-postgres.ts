import { Driver } from '../../../../../domain/entities/driver.entity';
import { DriverPostgresEntity } from '../entities/driver.entity-postgres';

export class DriverMapper {
  static toDomain(driverEntity: DriverPostgresEntity): Driver {
    return new Driver(
      driverEntity.id,
      driverEntity.firstName,
      driverEntity.lastName,
      driverEntity.licenseNumber,
      driverEntity.experienceYears,
      driverEntity.incidentHistory
    );
  }

  static toModel(driver: Driver): Partial<DriverPostgresEntity> {
    return {
      id: driver.id,
      firstName: driver.firstName,
      lastName: driver.lastName,
      licenseNumber: driver.licenseNumber,
      experienceYears: driver.experienceYears,
      incidentHistory: driver.incidentHistory,
    };
  }
}

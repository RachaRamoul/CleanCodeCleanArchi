import { Driver } from '../../../../../domain/entities/driver.entity';
import { DriverPostgresEntity } from '../entities/driver.entity-postgres';

export class DriverMapper {
  static toDomain(driverEntity: DriverPostgresEntity): Driver {
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

  static toModel(driver: Driver): Partial<DriverPostgresEntity> {
    return new DriverPostgresEntity(driver);
  }
}

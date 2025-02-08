import { Company } from '../../../../../domain/entities/company.entity';
import { Driver } from '../../../../../domain/entities/driver.entity';
import Name from '../../../../../domain/value-objects/name.vo';
import DriverPostgresEntity from '../entities/driver.entity-postgres';
import { CompanyMapper } from './company.mapper-postgres';
export class DriverMapper {
  static toDomain(driverEntity: DriverPostgresEntity): Driver {
    const companyDomain = CompanyMapper.toDomain(driverEntity.company);

    return new Driver(
      driverEntity.id,
      new Name(driverEntity.firstName),
      new Name(driverEntity.lastName),
      companyDomain,
      driverEntity.phoneNumber,
      driverEntity.licenseNumber,
      driverEntity.experienceYears,
    );
  }

  static toModel(driver: Driver): Partial<DriverPostgresEntity> {
    const companyPersistence = CompanyMapper.toModel(driver.company);
    const driverEntity = new DriverPostgresEntity();

    driverEntity.firstName = driver.firstName.value;
    driverEntity.lastName = driver.lastName.value;
    driverEntity.company = companyPersistence;
    driverEntity.phoneNumber = driver.phoneNumber;
    driverEntity.licenseNumber = driver.licenseNumber;
    driverEntity.experienceYears = driver.experienceYears;
  
    if (driver.id.length !== 0) {
      driverEntity.id = driver.id;
    }
    return driverEntity;

  }
}

import { Driver } from '../../../../../domain/entities/driver.entity';
import Name from '../../../../../domain/value-objects/name.vo';
import { IDriver, DriverModel } from '../entities/driver.entity-mongodb';
import { CompanyMapper } from './company.mapper-mongodb';
import { CompanyModel } from '../entities/company.entity-mongodb';
import mongoose from 'mongoose';

export class DriverMapper {
  static async toDomain(driverEntity: IDriver): Promise<Driver> {
    const companyEntity = await CompanyModel.findById(driverEntity.companyId).exec();

    if(!companyEntity){
      throw new Error('Company not found');
    }
    const company = CompanyMapper.toDomain(companyEntity);

    return new Driver(
      driverEntity.id,
      new Name(driverEntity.firstName),
      new Name(driverEntity.lastName),
      company,
      driverEntity.phoneNumber,
      driverEntity.licenseNumber,
      driverEntity.experienceYears,
    );
  }
  

  static toModel(driver: Driver): IDriver {
    const objectId = driver.id ? new mongoose.Types.ObjectId(driver.id) : undefined;
    
    return new DriverModel({
      _id: objectId,
      firstName: driver.firstName,
      lastName: driver.lastName,
      companyId: new mongoose.Types.ObjectId(driver.company.id),
      phoneNumber: driver.phoneNumber,
      licenseNumber: driver.licenseNumber,
      experienceYears: driver.experienceYears,
    });
  }
}

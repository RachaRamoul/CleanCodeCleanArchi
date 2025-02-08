import { Driver } from '../../../../domain/entities/driver.entity';
import { DriverModel } from '../persistence/entities/driver.entity-mongodb';
import { DriverMapper } from '../persistence/mappers/driver.mapper-mongodb';
import { IDriverRepository } from '../../../../application/repositories/driver.repository';
import { ObjectId } from 'mongodb';

export class DriverRepositoryMongoDB implements IDriverRepository {

  async findById(id: string): Promise<Driver | null> {
    const driverEntity = await DriverModel.findById(new ObjectId(id));
    return driverEntity ? DriverMapper.toDomain(driverEntity) : null;
  }

  async findByCompanyId(companyId: string): Promise<Driver[]> {
    const driverEntities = await DriverModel.find({ companyId: new ObjectId(companyId) }).exec();

    if (!driverEntities) {
      throw new Error('Driver not found.');
    }
    return Promise.all(driverEntities.map((driverEntity) => DriverMapper.toDomain(driverEntity)));
  }

  async findAll(): Promise<Driver[]> {
    const driverEntities = await DriverModel.find();
    return await Promise.all(driverEntities.map((driverEntity) => DriverMapper.toDomain(driverEntity)));
  }

  async save(driver: Driver): Promise<Driver> {
    const driverEntity = DriverMapper.toModel(driver);
    const savedDriverEntity = await driverEntity.save();
    return DriverMapper.toDomain(savedDriverEntity);
  }

  async findByLicenseNumber(licenseNumber: string): Promise<Driver | null> {
    const driverEntity = await DriverModel.findOne({ licenseNumber }).exec();
    return driverEntity ? DriverMapper.toDomain(driverEntity) : null;
  }

  async remove(id: string): Promise<void> {
    await DriverModel.deleteOne({ _id: new ObjectId(id) }).exec();
  }
}

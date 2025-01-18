import { Driver } from '../../../../domain/entities/driver.entity';
import { DriverModel } from '../persistence/entities/driver.entity-mongodb'; 
import { DriverMapper } from '../persistence/mappers/driver.mapper-mongodb'; 
import { IDriverRepository } from '../../../../application/repositories/driver.repository';
import { ObjectId } from 'mongodb';

export class MongoDriverRepository implements IDriverRepository {

  async findById(id: string): Promise<Driver | null> {
    const driverEntity = await DriverModel.findOne({ _id: new ObjectId(id) });
    return driverEntity ? DriverMapper.toDomain(driverEntity) : null;
  }

  async save(driver: Driver): Promise<Driver> {
    const driverEntity = DriverMapper.toModel(driver);
    const savedDriverEntity = await driverEntity.save();
    return DriverMapper.toDomain(savedDriverEntity);
  }

  async listDrivers(): Promise<Driver[]> {
    const driverEntities = await DriverModel.find();
    return driverEntities.map((driverEntity) => DriverMapper.toDomain(driverEntity));
  }

  async removeDriver(id: string): Promise<void> {
    await DriverModel.deleteOne({ _id: new ObjectId(id) });
  }
}

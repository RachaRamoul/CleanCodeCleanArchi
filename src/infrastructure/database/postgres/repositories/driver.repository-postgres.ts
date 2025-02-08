import { Repository } from 'typeorm';
import { AppDataSource } from '../postgres.config';
import DriverPostgresEntity from '../persistence/entities/driver.entity-postgres';
import { IDriverRepository } from '../../../../application/repositories/driver.repository';
import { Driver } from '../../../../domain/entities/driver.entity';
import { DriverMapper } from '../persistence/mappers/driver.mapper-postgres';

export class DriverRepositoryPostgres implements IDriverRepository {
  private repository: Repository<DriverPostgresEntity>;

  constructor() {
    this.repository = AppDataSource.getRepository(DriverPostgresEntity);
  }

  async findById(id: string): Promise<Driver | null> {
    const driverEntity = await this.repository.findOneBy({ id });
    return driverEntity ? DriverMapper.toDomain(driverEntity) : null; 
  }

  async findByCompanyId(companyId: string): Promise<Driver[]> {
    const queryBuilder = this.repository
      .createQueryBuilder('driver')
      .innerJoinAndSelect('driver.company', 'company')
      .where('company.id = :id', { id: companyId });
    
    const drivers = await queryBuilder.getMany();

    if (!drivers) {
      throw new Error(`No drivers found for company with ID: ${companyId}`);
    }
    
    return drivers.map((driver) => DriverMapper.toDomain(driver));
  }

  async findAll(): Promise<Driver[]> {
    const drivers = await this.repository.find();
    return drivers.map((driver) => DriverMapper.toDomain(driver));
  }

  async save(driver: Driver): Promise<Driver> {
    const driverEntity = DriverMapper.toModel(driver);
    const savedCompanyEntity = await this.repository.save(driverEntity);
    return DriverMapper.toDomain(savedCompanyEntity);
  }

  async findByLicenseNumber(licenseNumber: string): Promise<Driver | null> {
    const queryBuilder = this.repository
      .createQueryBuilder('driver')
      .where('driver.licenseNumber = :licenseNumber', { licenseNumber });
    
    const driverEntity = await queryBuilder.getOne();
    
    return driverEntity ? DriverMapper.toDomain(driverEntity) : null;
  }

  async remove(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}

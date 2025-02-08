import { Driver } from '../../domain/entities/driver.entity';

export interface IDriverRepository {
  save(driver: Driver): Promise<Driver>;
  findById(id: string): Promise<Driver | null>;
  findAll(): Promise<Driver[]>;
  findByCompanyId(companyId: string): Promise<Driver[]>;
  findByLicenseNumber(licenseNumber: string): Promise<Driver | null>;
  remove(id: string): Promise<void>;
}

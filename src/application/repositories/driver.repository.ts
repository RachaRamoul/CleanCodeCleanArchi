import { Driver } from '../../domain/entities/driver.entity';

export interface IDriverRepository {
  findById(id: string): Promise<Driver | null>;
  save(driver: Driver): Promise<Driver>;
  listDrivers(): Promise<Driver[]>;
  removeDriver(id: string): Promise<void>;
}

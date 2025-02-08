import { AddDriverUseCase } from '../../../../../../application/usecases/driver/add-driver.usecase';
import { GetDriverByIdUseCase } from '../../../../../../application/usecases/driver/get-driver.usecase';
import { ListDriversUseCase } from '../../../../../../application/usecases/driver/list-driver.usecase';
import { UpdateDriverUseCase } from '../../../../../../application/usecases/driver/update-driver.usecase';
import { RemoveDriverUseCase } from '../../../../../../application/usecases/driver/remove-driver.usecase';
import { GetCompanyDetailsUseCase } from '../../../../../../application/usecases/company/get-company-details.usecase';
import { Driver } from '../../../../../../domain/entities/driver.entity';
import { repositories } from '../../../../../database/config/repository.config';
import Name from '../../../../../../domain/value-objects/name.vo';


export class DriverService {
  constructor(
    private driverRepository = repositories().DriverRepository, 
    private companyRepository = repositories().CompanyRepository) {}

  async addDriver(
        firstName: string,
        lastName: string,
        companyId: string,
        phoneNumber: string,
        licenseNumber: string,
        experienceYears: number,
  ): Promise<Driver> {
    
    const addDriverUseCase = new AddDriverUseCase(this.driverRepository);
    const getCompanyDetailsUseCase = new GetCompanyDetailsUseCase(this.companyRepository);

    const firstNameObject: Name = new Name(firstName);
    const lastNameObject: Name = new Name(lastName);
    const companyObject = await getCompanyDetailsUseCase.execute(companyId);

    return await addDriverUseCase.execute(
        firstNameObject, 
        lastNameObject, 
        companyObject, 
        phoneNumber, 
        licenseNumber, 
        experienceYears
    );
  }
  
  async getDriverById(id: string): Promise<Driver | null> {
    const getDriverByIdUseCase = new GetDriverByIdUseCase(this.driverRepository);
    return getDriverByIdUseCase.execute(id);
  }

  async listDrivers(companyId? : string): Promise<Driver[]> {
    const listDriversUseCase = new ListDriversUseCase(this.driverRepository);

    if(companyId) {
        return await listDriversUseCase.execute(companyId);
    }     
    return await listDriversUseCase.execute();
  }

  async updateDriver(id: string, driverUpdateData: Partial<Driver>): Promise<Driver> {
    const updateDriverUseCase = new UpdateDriverUseCase(this.driverRepository);
    return await updateDriverUseCase.execute(id, driverUpdateData);
  }

  async deleteDriver(id: string): Promise<void> {
    const removeDriverUseCase = new RemoveDriverUseCase(this.driverRepository);
    await removeDriverUseCase.execute(id);
  }
}

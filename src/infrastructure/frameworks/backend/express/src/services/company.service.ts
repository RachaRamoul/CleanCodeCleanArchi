import { Company } from '../../../../../../domain/entities/company.entity';
import { AddCompanyUseCase } from '../../../../../../application/usecases/company/add-company.usecase';
import { RemoveCompanyUseCase } from '../../../../../../application/usecases/company/remove-company.usecase';
import { GetCompanyDetailsUseCase } from '../../../../../../application/usecases/company/get-company-details.usecase';
import { UpdateCompanyProfileUseCase } from '../../../../../../application/usecases/company/update-company-profile.usecase';
import { ListCompaniesUseCase } from '../../../../../../application/usecases/company/list-company.usecase';
import { repositories } from '../../../../../database/config/repository.config';
import Email from '../../../../../../domain/value-objects/email.vo';
import SiretNumber from '../../../../../../domain/value-objects/siret-number.vo';
import Name from '../../../../../../domain/value-objects/name.vo';

export class CompanyService {
    
    constructor(private companyRepository = repositories().CompanyRepository){}

    async getCompanyById(id: string,  fields?: string[]): Promise<Partial<Company>> {
        const getCompanyDetailsUseCase = new GetCompanyDetailsUseCase(this.companyRepository);
        const company = await getCompanyDetailsUseCase.execute(id);
    
        if (fields) {
            const filteredCompany = {};
            fields.forEach((field) => {
                if (company[field] !== undefined) {
                    filteredCompany[field] = company[field];
                }
            });
            return filteredCompany;
        }
    
        return company;
    }

    async createCompany(
        name: string,
        email: string, 
        number: string, 
        siretNumber: string, 
        isAdmin: boolean = false, 
        password: string): Promise<Company> {

        const nameObject: Name = new Name(name);
        const emailObject: Email = new Email(email);
        const siretNumberObject: SiretNumber = new SiretNumber(siretNumber);
        
        const addCompanyUseCase = new AddCompanyUseCase(this.companyRepository);

        return await addCompanyUseCase.execute(nameObject, emailObject, number, siretNumberObject, isAdmin, password);
    }

    async listCompanies(): Promise<Company[]> {
        const listCompaniesUseCase = new ListCompaniesUseCase(this.companyRepository);
        return await listCompaniesUseCase.execute();
    }

    async updateCompany(id: string, companyUpdateData: Partial<Company>): Promise<Company> {
        const updateCompanyProfileUseCase = new UpdateCompanyProfileUseCase(this.companyRepository);
        return await updateCompanyProfileUseCase.execute(id, companyUpdateData);
    }

    async deleteCompany(id: string): Promise<void> {
        const deleteCompanyUseCase = new RemoveCompanyUseCase(this.companyRepository);
        await deleteCompanyUseCase.execute(id);
    }
}
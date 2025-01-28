import { Company } from '@domain/entities/company.entity';
import { AddCompanyUseCase } from '../../../../../../application/usecases/company/add-company.usecase';
import { RemoveCompanyUseCase } from '../../../../../../application/usecases/company/remove-company.usecase';
import { GetCompanyDetailsUseCase } from '../../../../../../application/usecases/company/get-company-details.usecase';
import { UpdateCompanyProfileUseCase } from '../../../../../../application/usecases/company/update-company-profile.usecase';
import { ListCompaniesUseCase } from '../../../../../../application/usecases/company/list-company.usecase';
import { repositories } from '../../../../../database/config/repository.config';

const { CompanyRepository } = repositories();

export class CompanyService {
    
    constructor(private companyRepository = CompanyRepository){}

    async getCompanyById(id: string,  fields?: string[]): Promise<Partial<Company> | null> {
        const getCompanyDetailsUseCase = new GetCompanyDetailsUseCase(this.companyRepository);
        const company = await getCompanyDetailsUseCase.execute(id);

        if (!company) {
            return null;
        }
    
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

        const addCompanyUseCase = new AddCompanyUseCase(this.companyRepository);
        return await addCompanyUseCase.execute(name, email, number, siretNumber, isAdmin, password);
    }

    async listCompanies(): Promise<Company[]> {
        const listCompaniesUseCase = new ListCompaniesUseCase(this.companyRepository);
        return await listCompaniesUseCase.execute();
    }

    async updateCompany(id: string, updateData: Partial<Company>): Promise<Company> {
        const updateCompanyProfileUseCase = new UpdateCompanyProfileUseCase(this.companyRepository);
        return await updateCompanyProfileUseCase.execute(id, updateData);
    }

    async deleteCompany(id: string): Promise<void> {
        const deleteCompanyUseCase = new RemoveCompanyUseCase(this.companyRepository);
        await deleteCompanyUseCase.execute(id);
    }
}
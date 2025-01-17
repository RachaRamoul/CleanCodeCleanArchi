import { Company } from '../../domain/entities/company.entity';

export interface ICompanyRepository {
  findById(id: string): Promise<Company | null>;
  save(company: Company): Promise<Company>;
  listCompanies(): Promise<Company[]>;
  removeCompany(id: string): Promise<void>;
}

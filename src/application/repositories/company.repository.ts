import { Company } from '../../domain/entities/company.entity';

export interface ICompanyRepository {
  findById(id: string): Promise<Company | null>;
  save(company: Company): Promise<Company>;
  findAll(): Promise<Company[]>;
  removeCompany(id: string): Promise<void>;
  updateCompany(id: string, updateData: Partial<Company>): Promise<Company | null>;
}

import { Company } from '../../domain/entities/company.entity';

export interface ICompanyRepository {
  findById(id: string): Promise<Company | null>;
  findByEmail(email: string, includePassword?: boolean): Promise<Company | null>;
  save(company: Company): Promise<Company>;
  findAll(): Promise<Company[]>;
  update(Company: Company): Promise<Company>;
  remove(id: string): Promise<void>;
}

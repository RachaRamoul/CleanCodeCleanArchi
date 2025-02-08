import Email from '../../domain/value-objects/email.vo';
import { Company } from '../../domain/entities/company.entity';

export interface ICompanyRepository {
  findById(id: string): Promise<Company | null>;
  findByEmail(email: Email, includePassword?: boolean): Promise<Company | null>;
  save(company: Company): Promise<Company>;
  findAll(): Promise<Company[]>;
  remove(id: string): Promise<void>;
}

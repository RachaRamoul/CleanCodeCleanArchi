import { Repository } from 'typeorm';
import { AppDataSource } from '../postgres.config';
import CompanyPostgresEntity from '../persistence/entities/company.entity-postgres';
import { Company } from '../../../../domain/entities/company.entity';
import { CompanyMapper } from '../persistence/mappers/company.mapper-postgres';
import { ICompanyRepository } from '../../../../application/repositories/company.repository';
import Email from '../../../../domain/value-objects/email.vo';

export class CompanyRepositoryPostgres implements ICompanyRepository{
  private repository: Repository<CompanyPostgresEntity>;

  constructor() {
    this.repository = AppDataSource.getRepository(CompanyPostgresEntity);
  }
  
  async findById(id: string): Promise<Company | null> {
    const companyEntity = await this.repository.findOneBy({ id });
    return companyEntity ? CompanyMapper.toDomain(companyEntity) : null; 
  }

  async findByEmail(email: Email, includePassword: boolean = false): Promise<Company | null> {
    const queryBuilder = this.repository.createQueryBuilder('company').where('company.email = :email', { email: email.value });
    
    if(includePassword) {
      queryBuilder.addSelect('company.password');
    }
    const companyEntity = await queryBuilder.getOne();
    
    return companyEntity ? CompanyMapper.toDomain(companyEntity) : null;
  }

  async save(company: Company): Promise<Company> {
    const companyEntity = CompanyMapper.toModel(company);
    const savedCompanyEntity = await this.repository.save(companyEntity);
    return CompanyMapper.toDomain(savedCompanyEntity);
  }

  async findAll(): Promise<Company[]> {
    const companies = await this.repository.find();
    return companies.map((company) => CompanyMapper.toDomain(company));
  }

  async remove(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}


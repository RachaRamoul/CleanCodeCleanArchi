import { Repository } from 'typeorm';
import { AppDataSource } from '../postgres.config';
import CompanyPostgresEntity from '../persistence/entities/company.entity-postgres';
import { ICompanyRepository } from '../../../../application/repositories/company.repository';
import { Company } from '../../../../domain/entities/company.entity';
import { CompanyMapper } from '../persistence/mappers/company.mapper-postgres';

export class PostgresCompanyRepository implements ICompanyRepository{
  private repository: Repository<CompanyPostgresEntity>;

  constructor() {
    this.repository = AppDataSource.getRepository(CompanyPostgresEntity);
  }

  async save(company: Company): Promise<Company> {
    const entity = CompanyMapper.toModel(company);
    const savedEntity = await this.repository.save(entity);
    return CompanyMapper.toDomain(savedEntity);
  }

  async findById(id: string): Promise<Company | null> {
    const entity = await this.repository.findOneBy({ id });
    return entity ? CompanyMapper.toDomain(entity) : null; 
  }

  async findAll(): Promise<Company[]> {
    const entities = await this.repository.find();
    return entities.map((entity) => CompanyMapper.toDomain(entity));
  }

  async updateCompany(companyId: string, updateData: Partial<CompanyPostgresEntity>): Promise<Company | null> {
    const updateResult = await this.repository.update(companyId, updateData);
    if (updateResult.affected === 0) {
      return null;
    }
  
    const updatedEntity = await this.repository.findOneBy({ id: companyId });
    return updatedEntity ? CompanyMapper.toDomain(updatedEntity) : null;
  }

  async removeCompany(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}


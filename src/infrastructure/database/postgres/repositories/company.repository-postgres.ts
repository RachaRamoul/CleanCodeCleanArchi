import { Repository } from 'typeorm';
import { AppDataSource } from '../postgres.config';
import CompanyPostgresEntity from '../persistence/entities/company.entity-postgres';

export class CompanyRepositoryPostgres {
  private repository: Repository<CompanyPostgresEntity>;

  constructor() {
    this.repository = AppDataSource.getRepository(CompanyPostgresEntity);
  }

  async create(company: CompanyPostgresEntity): Promise<CompanyPostgresEntity> {
    return this.repository.save(company);
  }

  async findById(companyId: string): Promise<CompanyPostgresEntity | null> {
    return this.repository.findOneBy({ companyId });
  }

  async findAll(): Promise<CompanyPostgresEntity[]> {
    return this.repository.find();
  }

  async update(companyId: string, updateData: Partial<CompanyPostgresEntity>): Promise<void> {
    await this.repository.update(companyId, updateData);
  }

  async delete(companyId: string): Promise<void> {
    await this.repository.delete(companyId);
  }
}

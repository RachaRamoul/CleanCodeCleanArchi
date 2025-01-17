import { Company } from '../../../../domain/entities/company.entity';
import { CompanyModel } from '../persistence/entities/company.entity-mongodb'; 
import { CompanyMapper } from '../persistence/mappers/company.mapper-mongodb'; 
import { ICompanyRepository } from '../../../../application/repositories/company.repository';
import { ObjectId } from 'mongodb';

export class MongoCompanyRepository implements ICompanyRepository {

  async findById(id: string): Promise<Company | null> {
    const companyEntity = await CompanyModel.findOne({ _id: new ObjectId(id) });
    return companyEntity ? CompanyMapper.toDomain(companyEntity) : null;
  }

  async save(company: Company): Promise<Company> {
    const companyEntity = CompanyMapper.toModel(company);
    const savedCompanyEntity = await companyEntity.save();
    return CompanyMapper.toDomain(savedCompanyEntity);
  }

  async listCompanies(): Promise<Company[]> {
    const companyEntities = await CompanyModel.find();
    return companyEntities.map((companyEntity) => CompanyMapper.toDomain(companyEntity));
  }

  async removeCompany(id: string): Promise<void> {
    await CompanyModel.deleteOne({ _id: new ObjectId(id) });
  }
}

import { Company } from '../../../../domain/entities/company.entity';
import { CompanyModel } from '../persistence/entities/company.entity-mongodb'; 
import { CompanyMapper } from '../persistence/mappers/company.mapper-mongodb'; 
import { ICompanyRepository } from '../../../../application/repositories/company.repository';
import { ObjectId } from 'mongodb';
import { Types } from 'mongoose';
import Email from '../../../../domain/value-objects/email.vo';
import { DriverMapper } from '../../postgres/persistence/mappers/driver.mapper-postgres';

export class CompanyRepositoryMongoDB implements ICompanyRepository {

  async findById(id: string): Promise<Company | null> {
    if (!ObjectId.isValid(id)) {
      throw new Error('Invalid ObjectId format');
    }
    const companyEntity = await CompanyModel.findOne({ _id: new Types.ObjectId(id) });
    
    return companyEntity ? CompanyMapper.toDomain(companyEntity) : null;
  }

  async findByEmail(email: Email, includePassword: boolean = false): Promise<Company | null> {
    const companyEntity = includePassword 
      ? await CompanyModel.findOne({ email: email.value }).select('+password')
      : await CompanyModel.findOne({ email: email.value});

    return companyEntity ? CompanyMapper.toDomain(companyEntity) : null;
  }

  async save(company: Company): Promise<Company> {
    const companyEntity = CompanyMapper.toModel(company);
    const savedCompanyEntity = await companyEntity.save();
    return CompanyMapper.toDomain(savedCompanyEntity);
  }

  async findAll(): Promise<Company[]> {
    const companyEntities = await CompanyModel.find();
    return companyEntities.map((companyEntity) => CompanyMapper.toDomain(companyEntity));
  }
  
  async update(company: Company): Promise<Company> {
    if (!ObjectId.isValid(company.id)) {
      throw new Error('Invalid ObjectId format');
    }

    const updatedCompanyEntity = await CompanyModel.findOneAndUpdate(
      { _id: new Types.ObjectId(company.id) },
      { $set: company },  
      { new: true }            
    );

        if (!updatedCompanyEntity) {
      throw new Error('Company not found for update');
    }

    return CompanyMapper.toDomain(updatedCompanyEntity);
  }

  async remove(id: string): Promise<void> {
    if (!ObjectId.isValid(id)) {
      throw new Error('Invalid ObjectId format');
    }
    await CompanyModel.deleteOne({ _id: new Types.ObjectId(id) });
  }

}

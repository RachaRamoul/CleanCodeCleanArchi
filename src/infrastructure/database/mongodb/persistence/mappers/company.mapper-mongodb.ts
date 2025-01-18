import { Company } from '../../../../../domain/entities/company.entity';
import { ICompany, CompanyModel } from '../entities/company.entity-mongodb';

export class CompanyMapper {
  static toDomain(companyEntity: ICompany): Company {
    return new Company(
      companyEntity._id.toString(),  
      companyEntity.name,       
      companyEntity.email,      
      companyEntity.number,   
      companyEntity.siretNumber,
      companyEntity.isAdmin,  
      companyEntity.password
    );
  }

  static toModel(company: Company): ICompany {
    return new CompanyModel(company);
  }
}

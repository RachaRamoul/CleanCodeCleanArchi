import { Company } from '../../../../../domain/entities/company.entity';
import { ICompany, CompanyModel } from '../entities/company.entity-mongodb';

export class CompanyMapper {
  static toDomain(companyEntity: ICompany): Company {
    return new Company(
      companyEntity.companyId,  // companyId
      companyEntity.name,       // name
      companyEntity.email,      // email
      companyEntity.number,      // phone
      companyEntity.siretNumber,// siretNumber
    );
  }

  static toModel(company: Company): ICompany {
    return new CompanyModel(company);
  }
}

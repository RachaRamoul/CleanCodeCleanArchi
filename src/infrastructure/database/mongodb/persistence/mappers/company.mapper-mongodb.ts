import { Company } from '../../../../../domain/entities/company.entity';
import SiretNumber from '../../../../../domain/value-objects/siret-number.vo';
import Email from '../../../../../domain/value-objects/email.vo';
import Name from '../../../../../domain/value-objects/name.vo';
import { ICompany, CompanyModel } from '../entities/company.entity-mongodb';

export class CompanyMapper {
  static toDomain(companyEntity: ICompany): Company {
    return new Company(
      companyEntity._id.toString(),  
      new Name(companyEntity.name),       
      new Email(companyEntity.email),      
      companyEntity.number,   
      new SiretNumber(companyEntity.siretNumber),
      companyEntity.isAdmin,  
      companyEntity.password
    );
  }

  static toModel(company: Company): ICompany {
    return new CompanyModel({
      name: company.name.value,
      email: company.email.value,
      number: company.number,
      siretNumber: company.siretNumber.value,
      isAdmin: company.isAdmin,
      password: company.password,
    });
  }
}


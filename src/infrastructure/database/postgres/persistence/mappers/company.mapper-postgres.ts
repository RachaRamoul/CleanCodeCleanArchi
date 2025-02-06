import { Company } from '../../../../../domain/entities/company.entity';
import SiretNumber from '../../../../../domain/value-objects/siret-number.vo';
import Email from '../../../../../domain/value-objects/email.vo';
import Name from '../../../../../domain/value-objects/name.vo';
import CompanyPostgresEntity from '../entities/company.entity-postgres';

export class CompanyMapper {
  static toDomain(companyEntity: CompanyPostgresEntity): Company {
    return new Company(
      companyEntity.id,  
      new Name(companyEntity.name),        
      new Email(companyEntity.email),       
      companyEntity.number,      
      new SiretNumber(companyEntity.siretNumber), 
      companyEntity.isAdmin, 
      companyEntity.password,  
    );
  }

  static toModel(company: Company): CompanyPostgresEntity {
    const companyEntity = new CompanyPostgresEntity();
  
    companyEntity.name = company.name.value;
    companyEntity.email = company.email.value;
    companyEntity.number = company.number;
    companyEntity.siretNumber = company.siretNumber.value;
    companyEntity.isAdmin = company.isAdmin;
    companyEntity.password = company.password;
  
    if (company.id.length !== 0) {
      companyEntity.id = company.id;
    }
  
    return companyEntity; 
  }
}

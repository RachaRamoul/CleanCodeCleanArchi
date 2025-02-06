import { Company } from '../../../../../domain/entities/company.entity';
import CompanyPostgresEntity from '../entities/company.entity-postgres';

export class CompanyMapper {
  static toDomain(companyEntity: CompanyPostgresEntity): Company {
    return new Company(
      companyEntity.id,  
      companyEntity.name,        
      companyEntity.email,       
      companyEntity.number,      
      companyEntity.siretNumber, 
      companyEntity.isAdmin, 
      companyEntity.password,  
    );
  }

  static toModel(company: Company): CompanyPostgresEntity {
    const companyEntity = new CompanyPostgresEntity();
  
    companyEntity.name = company.name;
    companyEntity.email = company.email;
    companyEntity.number = company.number;
    companyEntity.siretNumber = company.siretNumber;
    companyEntity.isAdmin = company.isAdmin;
    companyEntity.password = company.password;
  
    if (company.id.length !== 0) {
      companyEntity.id = company.id;
    }
  
    return companyEntity; 
  }
}

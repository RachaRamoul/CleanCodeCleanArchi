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

  static toModel(company: Company): Partial<CompanyPostgresEntity> {
    return new CompanyPostgresEntity(company);
  }
}

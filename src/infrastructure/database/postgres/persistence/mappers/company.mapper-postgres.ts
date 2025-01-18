import { Company } from '../../../../../domain/entities/company.entity';
import CompanyPostgresEntity from '../entities/company.entity-postgres';

export class CompanyMapper {
  static toDomain(companyEntity: CompanyPostgresEntity): Company {
    return new Company(
      companyEntity.companyId,  
      companyEntity.name,        
      companyEntity.email,       
      companyEntity.number,      
      companyEntity.siretNumber, 
    );
  }

  static toModel(company: Company): Partial<CompanyPostgresEntity> {
    return new CompanyPostgresEntity({
      companyId: company.companyId,
      name: company.name,
      email: company.email,
      number: company.number,
      siretNumber: company.siretNumber,
    });
  }
}

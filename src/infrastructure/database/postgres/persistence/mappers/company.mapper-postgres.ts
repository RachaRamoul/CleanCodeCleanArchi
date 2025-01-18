import { Company } from '../../../../../domain/entities/company.entity';
import CompanyPostgresEntity from '../entities/company.entity-postgres';

export class CompanyMapper {
  static toDomain(companyEntity: CompanyPostgresEntity): Company {
    return new Company(
      companyEntity.companyId,   // companyId (UUID)
      companyEntity.name,        // Nom de l'entreprise
      companyEntity.email,       // Email de l'entreprise
      companyEntity.number,      // Numéro de téléphone de l'entreprise
      companyEntity.siretNumber, // Numéro SIRET
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

import { AddCompanyUseCase } from '../../../application/usecases/company/add-company.usecase';
import Email from '../../../domain/value-objects/email.vo';
import SiretNumber from '../../../domain/value-objects/siret-number.vo';
import Name from '../../../domain/value-objects/name.vo';
import { clearTableOrCollection } from '../config/database-cleanup.config';
import { repositories } from '../config/repository.config';

export async function createCompaniesFixtures() {
  const { CompanyRepository } = repositories();
  const companyRepository = CompanyRepository;
  const addCompanyUseCase = new AddCompanyUseCase(companyRepository);

  const companies = [
    {
        name: "Triumph mère",
        email: "admin@triumph.com",
        number: "0123456789",
        siretNumber: "73282932000074",
        isAdmin: true,
        password: "admin",
    },
    {
      name: "Triumph Paris",
      email: "paris@triumph.com",
      number: "0987654321",
      siretNumber: "55210055400013",
      isAdmin : false,
      password: "paris",
    },
    {
      name: "Triumph Lyon",
      email: "lyon@triumph.com",
      number: "0112233445",
      siretNumber: "34992384900019",
      isAdmin: false,
      password: "lyon",
    },
    {
      name: "Triumph Marseille",
      email: "marseille@triumph.com",
      number: "0156677889",
      siretNumber: "38012986600014",
      isAdmin: false,
      password: "marseille",
    },
  ];

  try {
    console.log("Clearing company data...");
    await clearTableOrCollection('companies');
    
    for(let i = 0; i<companies.length; i++){
        await addCompanyUseCase.execute(
            new Name(companies[i].name),
            new Email(companies[i].email),
            companies[i].number,
            new SiretNumber(companies[i].siretNumber),
            companies[i].isAdmin,
            companies[i].password
        );
      }
    console.log("Fixtures for companies have been successfully added !");
  } catch (error) {
    console.error("Error when adding fixtures for companies:", error);
  }
}


import { AddCompanyUseCase } from '../../../application/usecases/company/add-company.usecase';
import { clearTableOrCollection } from '../config/database-cleanup.config';
import { repositories } from '../config/repository.config';

export async function createCompaniesFixtures() {
  const { CompanyRepository } = repositories();
  const companyRepository = CompanyRepository;
  const addCompanyUseCase = new AddCompanyUseCase(companyRepository);

  //Non-admin account
  const companies = [
    {
        name: "Triumph mère",
        email: "admin@triumph.com",
        number: "0123456789",
        siretNumber: "12345678900010",
        isAdmin: true,
        password: "admin",
    },
    {
      name: "Triumph Paris",
      email: "paris@triumph.com",
      number: "0987654321",
      siretNumber: "12345678900011",
      isAdmin : false,
      password: "paris",
    },
    {
      name: "Triumph Lyon",
      email: "lyon@triumph.com",
      number: "01122334455",
      siretNumber: "12345678900012",
      isAdmin: false,
      password: "lyon",
    },
    {
      name: "Triumph Marseille",
      email: "marseille@triumph.com",
      number: "01566778899",
      siretNumber: "12345678900013",
      isAdmin: false,
      password: "marseille",
    },
  ];

  try {
    console.log("Clearing company data...");
    await clearTableOrCollection('companies');

    for(let i = 0; i<companies.length; i++){
        await addCompanyUseCase.execute(
            companies[i].name,
            companies[i].email,
            companies[i].number,
            companies[i].siretNumber,
            companies[i].isAdmin,
            companies[i].password
        );
    }
    console.log("Fixtures for companies have been successfully added !");
  } catch (error) {
    console.error("Error when adding fixtures for companies:", error);
  }
}


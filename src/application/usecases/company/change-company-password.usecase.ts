import { ICompanyRepository } from "../../repositories/company.repository";

export class ChangeCompanyPasswordUseCase {
  constructor(private companyRepository: ICompanyRepository) {}

  async execute(
    id: string,
    oldPassword: string,
    newPassword: string
  ): Promise<void> {
    
    const company = await this.companyRepository.findById(id);
    if (!company) {
        throw new Error("company not found.");
    }

    if (company.password !== oldPassword) {
        throw new Error('The old password is incorrect.');
    }

    company.password = newPassword;

    await this.companyRepository.update(company);
  }
}

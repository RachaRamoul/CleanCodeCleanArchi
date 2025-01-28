import { ICompanyRepository } from "../../repositories/company.repository";
import { Company } from "../../../domain/entities/company.entity";

export class ListCompaniesUseCase {
  constructor(private repository: ICompanyRepository) {}

  async execute(): Promise<Company[]> {
    return await this.repository.findAll();
  }
}

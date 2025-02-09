import expressApiClient from "./expressApiClient";
import { getCompanyIdFromToken } from "../utils/tokenUtils";
import { Company } from "../../../../../../domain/entities/company.entity";
import { PartialCompany } from "../types/company";

export const CompanyService = {
  /**
   * Fetches company data based on the specified fields filter.
   * @param {string} [filter] - A comma-separated string specifying the fields to retrieve, e.g., 'name,isAdmin,siretNumber'.
   *                            If no filter is provided, all fields of the company will be retrieved by default.
   */
  getCompanyByfilter: async (filter?: string): Promise<Partial<Company | null>> => {
    try {
      const companyId: string | null = await getCompanyIdFromToken();

      const response = await expressApiClient.get(`api/company/${companyId}`, {
        params: {
          fields: filter,
        },
      });
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  getCompagnyById: async (id: string): Promise<Company | null> => {
    try {
      const response = await expressApiClient.get(`api/company/${id}`);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la récupération des détails de la compagnie :", error);
      throw error;
    }
  },

  listCompanies: async (): Promise<Company[]> => {
    try {
      const response = await expressApiClient.get(`api/company/all`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  createCompany: async (
    name: string,
    email: string,
    number: string,
    siretNumber: string,
    isAdmin: boolean,
    password: string
  ): Promise<Partial<Company> | null> => {
    try {
      const response = await expressApiClient.post(`api/company/`, {
        name,
        email,
        number,
        siretNumber,
        isAdmin,
        password,
      });

      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  deleteCompany: async (id: string): Promise<void> => {
    try {
      await expressApiClient.delete(`api/company/${id}`);
    } catch (error) {
      console.error("Erreur lors de la suppression de la compagnie :", error);
      throw error;
    }
  },

  editCompany: async (id: string, company: PartialCompany): Promise<void> => {
    try {
      await expressApiClient.put(`api/company/${id}`, company);
    } catch (error) {
      console.error("Erreur la modification de la compagnie :", error);
      throw error;
    }
  },
};

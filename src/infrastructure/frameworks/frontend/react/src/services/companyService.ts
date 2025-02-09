import expressApiClient from './expressApiClient';
import { getCompanyIdFromToken } from '../utils/tokenUtils';
import { Company } from '../../../../../../domain/entities/company.entity';

export const companyService = {
    /**
     * Fetches company data based on the specified fields filter.
     * @param {string} [filter] - A comma-separated string specifying the fields to retrieve, e.g., 'name,isAdmin,siretNumber'.
     *                            If no filter is provided, all fields of the company will be retrieved by default.
    */  
    getCompanyByfilter: async (filter?: string): Promise<Partial<Company> | null> => {
        try {
            const companyId: string | null = await getCompanyIdFromToken();
            const response = await expressApiClient.get(`api/company/${companyId}`, {
                params: { fields: filter },
            });
            return response.data;
        } catch (error) {
            console.error("Error fetching company by filter:", error);
            throw error;
        }
    },
    listCompanies: async (): Promise<Company[]> => {
      try {
        const response = await expressApiClient.get(`/api/company/all`);
        return response.data;
      } catch (error) {
        console.error("Erreur lors de la récupération des entreprises :", error);
        throw error;
      }
    },
};
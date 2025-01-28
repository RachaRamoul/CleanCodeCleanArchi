import apiClient from './apiClient';
import { API_BASE_URL_EXPRESS } from '../../config/api.config';
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

          const response = await apiClient.get(`${API_BASE_URL_EXPRESS}api/company/${companyId}`, {
            params: {
              fields: filter,
            },
          });
          return response.data;
        }catch(error){
          console.error(error);
          throw error;
        }
    },
}

import apiClient from './apiClient';
import { API_BASE_URL_EXPRESS } from '../../config/api.config';

export const listMotorcycles = async () => {
  const response = await apiClient.get(`${API_BASE_URL_EXPRESS}api/motorcycles`);
  return response.data;
};

export const addMotorcycle = async (motorcycle: {
  modelId: string;
  mileage: number;
  status: string;
  companyId: string;
}) => {
  const response = await apiClient.post(`${API_BASE_URL_EXPRESS}api/motorcycles`, motorcycle);
  return response.data;
};

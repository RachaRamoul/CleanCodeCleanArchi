import axios from 'axios';
import { API_BASE_URL_EXPRESS } from '../../config/api.config';

export const listMotorcycles = async () => {
  const response = await axios.get(`${API_BASE_URL_EXPRESS}api/motorcycles`);
  return response.data;
};

export const addMotorcycle = async (motorcycle: {
  modelId: string;
  mileage: number;
  status: string;
  companyId: string;
}) => {
  const response = await axios.post(`${API_BASE_URL_EXPRESS}api/motorcycles`, motorcycle);
  return response.data;
};

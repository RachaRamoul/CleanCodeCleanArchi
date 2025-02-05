import apiClient from './apiClient';
import { PARTS_API_URL } from '../../config/api.config';

export const partsService = {
  listParts: async () => {
    const response = await apiClient.get('/api/parts');
    return response.data;
  },
  addPart: async (part) => {
    await apiClient.post('/api/parts', part);
  },
  deletePart: async (id) => {
    await apiClient.delete(`/api/parts/${id}`);
  }
};
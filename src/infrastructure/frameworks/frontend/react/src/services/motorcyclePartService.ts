import apiClient from './apiClient';
import { MOTORCYCLE_PARTS_API_URL } from '../../config/api.config';
import { MotorcyclePart } from '../../../../../../domain/entities/motorcycle-part.entity';

export const motorcyclePartService = {
  listMotorcycleParts: async (): Promise<MotorcyclePart[]> => {
    try {
      const response = await apiClient.get(MOTORCYCLE_PARTS_API_URL);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  addMotorcyclePart: async (part: Partial<MotorcyclePart>): Promise<void> => {
    try {
      await apiClient.post(MOTORCYCLE_PARTS_API_URL, part);
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  deleteMotorcyclePart: async (id: string): Promise<void> => {
    try {
      await apiClient.delete(`${MOTORCYCLE_PARTS_API_URL}${id}`);
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  
  getMotorcyclePartById: async (id: number): Promise<MotorcyclePart | null> => {
    try {
      const response = await apiClient.get(`${MOTORCYCLE_PARTS_API_URL}${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
};
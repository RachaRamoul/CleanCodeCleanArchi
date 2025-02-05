import apiClient from './apiClient';
import { MOTORCYCLES_API_URL } from '../../config/api.config';
import { Motorcycle } from '../../../../../../domain/entities/motorcycle.entity';

export const motorcycleService = {
  listMotorcycles: async (): Promise<Motorcycle[]> => {
    try {
      const response = await apiClient.get(MOTORCYCLES_API_URL);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la récupération des motos :", error);
      throw error;
    }
  },

  addMotorcycle: async (motorcycle: Partial<Motorcycle>): Promise<void> => {
    try {
      await apiClient.post(MOTORCYCLES_API_URL, motorcycle);
    } catch (error) {
      console.error("Erreur lors de l'ajout de la moto :", error);
      throw error;
    }
  },

  deleteMotorcycle: async (id: string): Promise<void> => {
    try {
      await apiClient.delete(`${MOTORCYCLES_API_URL}${id}`);
    } catch (error) {
      console.error("Erreur lors de la suppression de la moto :", error);
      throw error;
    }
  },
  
  getMotorcycleById: async (id: number): Promise<Motorcycle | null> => {
    try {
      const response = await apiClient.get(`${MOTORCYCLES_API_URL}${id}`);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la récupération des détails de la moto :", error);
      throw error;
    }
  },
};
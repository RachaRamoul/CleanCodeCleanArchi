import expressApiClient from './expressApiClient';
import { MOTORCYCLES_API_URL } from '../../config/api.config';
import { Motorcycle } from '../../../../../../domain/entities/motorcycle.entity';
import { PartialMotorcycle } from '../types/motorcyclePartial';

export const motorcycleService = {
  listMotorcycles: async (): Promise<Motorcycle[]> => {
    try {
      const response = await expressApiClient.get(MOTORCYCLES_API_URL);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la récupération des motos :", error);
      throw error;
    }
  },

  addMotorcycle: async (motorcycle: PartialMotorcycle): Promise<void> => {
    try {
      await expressApiClient.post(MOTORCYCLES_API_URL, motorcycle);
    } catch (error) {
      console.error("Erreur lors de l'ajout de la moto :", error);
      throw error;
    }
  },

  updateMotorcycle: async (id: string, updateData: PartialMotorcycle): Promise<void> => {
    try {
      await expressApiClient.put(`${MOTORCYCLES_API_URL}/${id}`, updateData);
    } catch (error) {
      console.error("Erreur lors de la mise à jour de la moto :", error);
      throw error;
    }
  },

  deleteMotorcycle: async (id: string): Promise<void> => {
    try {
      await expressApiClient.delete(`${MOTORCYCLES_API_URL}/${id}`);
    } catch (error) {
      console.error("Erreur lors de la suppression de la moto :", error);
      throw error;
    }
  },
  
  getMotorcycleById: async (id: string): Promise<Motorcycle | null> => {
    try {
      const response = await expressApiClient.get(`${MOTORCYCLES_API_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la récupération des détails de la moto :", error);
      throw error;
    }
  },
};
import expressApiClient from './expressApiClient';
import { MOTORCYCLE_MODELS_API_URL } from '../../config/api.config';

export interface MotorcycleModel {
  id: string;
  name: string;
  maintenanceFrequencyInKilometers: number;
}

export const motorcycleModelService = {
  listMotorcycleModels: async (): Promise<MotorcycleModel[]> => {
    try {
      const response = await expressApiClient.get(MOTORCYCLE_MODELS_API_URL);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la récupération des modèles de moto :", error);
      throw error;
    }
  },
};
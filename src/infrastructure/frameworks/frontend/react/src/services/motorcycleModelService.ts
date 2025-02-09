import expressApiClient from './expressApiClient';
import { MOTORCYCLE_MODELS_API_URL } from '../../config/api.config';
import { MotorcycleModel } from '../../../../../../domain/entities/motorcycle-model.entity';

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

  addMotorcycleModel: async (modelData: Partial<MotorcycleModel>): Promise<void> => {
    try {
      await expressApiClient.post(MOTORCYCLE_MODELS_API_URL, modelData);
    } catch (error) {
      console.error("Erreur lors de l'ajout du modèle de moto :", error);
      throw error;
    }
  },

  deleteMotorcycleModel: async (id: string): Promise<void> => {
    try {
      await expressApiClient.delete(`${MOTORCYCLE_MODELS_API_URL}/${id}`);
    } catch (error) {
      console.error("Erreur lors de la suppression du modèle de moto :", error);
      throw error;
    }
  }
};

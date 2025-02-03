import apiClient from './apiClient';
import { MOTORCYCLES_API_URL } from '../../config/api.config';
import { Motorcycle } from '../../../../../../domain/entities/motorcycle.entity';

export const motorcycleService = {
  /**
   * Récupère la liste de toutes les motos.
   */
  listMotorcycles: async (): Promise<Motorcycle[]> => {
    try {
      const response = await apiClient.get(MOTORCYCLES_API_URL);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la récupération des motos :", error);
      throw error;
    }
  },

  /**
   * Ajoute une nouvelle moto.
   * @param {object} motorcycle - Données de la moto à ajouter.
   */
  addMotorcycle: async (motorcycle: Partial<Motorcycle>): Promise<void> => {
    try {
      await apiClient.post(MOTORCYCLES_API_URL, motorcycle);
    } catch (error) {
      console.error("Erreur lors de l'ajout de la moto :", error);
      throw error;
    }
  },

  /**
   * Supprime une moto par son ID.
   * @param {string} id - ID de la moto à supprimer.
   */
  deleteMotorcycle: async (id: string): Promise<void> => {
    if (!id || id === "NaN") {
      console.error("Erreur : ID de la moto est invalide", id);
      return;
    }
  
    try {
      await apiClient.delete(`${MOTORCYCLES_API_URL}${id}`);
    } catch (error) {
      console.error("Erreur lors de la suppression de la moto :", error);
      throw error;
    }
  },
  

  /**
   * Récupère une moto par son ID.
   * @param {number} id - ID de la moto.
   * @returns {Promise<Motorcycle | null>} - Détails de la moto.
   */
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
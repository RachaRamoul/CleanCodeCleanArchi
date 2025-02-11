import fastifyApiClient from "./fastifyApiClient";
import { Driver } from "../../../../../../domain/entities/driver.entity";

export const DriverService = {

  getDriverById: async (id: string): Promise<Driver | null> => {
    try {
      const response = await fastifyApiClient.get(`api/driver/${id}`);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la récupération des détails du conducteur :", error);
      throw error;
    }
  },

  listDrivers: async (): Promise<Driver[]> => {
    try {
      const response = await fastifyApiClient.get(`api/driver/all`);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la récupération de la liste des conducteurs :", error);
      throw error;
    }
  },

  listDriversByCompany: async (companyId: string): Promise<Driver[]> => {
    try {
      const response = await fastifyApiClient.get(`api/driver/company/${companyId}`);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la récupération des conducteurs de l'entreprise :", error);
      throw error;
    }
  },

  createDriver: async (
    firstName: string,
    lastName: string,
    phoneNumber: string,
    licenseNumber: string,
    experienceYears: number,
    company: string
  ): Promise<Partial<Driver> | null> => {
    try {
      const response = await fastifyApiClient.post(`api/driver/`, {
        firstName,
        lastName,
        phoneNumber,
        licenseNumber,
        experienceYears,
        company
      });
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la création du conducteur :", error);
      throw error;
    }
  },

  deleteDriver: async (id: string): Promise<void> => {
    try {
      await fastifyApiClient.delete(`api/driver/${id}`);
    } catch (error) {
      console.error("Erreur lors de la suppression du conducteur :", error);
      throw error;
    }
  },

  editDriver: async (id: string, driverData: Partial<Driver>): Promise<void> => {
    try {
      await fastifyApiClient.put(`api/driver/${id}`, driverData);
    } catch (error) {
      console.error("Erreur lors de la modification des informations du conducteur :", error);
      throw error;
    }
  },
};

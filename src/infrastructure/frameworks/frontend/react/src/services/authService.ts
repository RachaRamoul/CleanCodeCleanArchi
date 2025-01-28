import { API_BASE_URL_EXPRESS } from '../../config/api.config';
import { removeToken, getToken } from '../utils/localStorage';
import apiClient  from '../services/apiClient';
import axios from 'axios';

export const authService = {
    login: async ( email: string, password: string): Promise<string> => {
      try {
        const response = await apiClient.post(`${API_BASE_URL_EXPRESS}api/auth`, { email, password });
        return response.data.token;
      } catch (error: unknown) {

        if (axios.isAxiosError(error) && error.response) {
          const status = error.response.status;
  
          if (status === 400) {
            throw new Error("L'email et le mot de passe sont requis.");
          } else if (status === 401) {
            throw new Error("L'email ou/et le mot de passe sont incorrects.");
          } else {
            throw new Error("Une erreur est survenue lors de la connexion.");
          }
        }
        throw new Error("Une erreur inconnue est survenue.");
      }
    },

    logout: () => {
      try {
        removeToken();
        window.location.href = '/';
        console.info('User has been logged out successfully.');
      } catch (error) {
        console.error('An error occurred while logging out:', error);
      }
    },

    isAuthenticated: async () => {
      const token = getToken();
      
      if(!token) return false;

      try{
        const response = await apiClient.post(`${API_BASE_URL_EXPRESS}api/auth/validateToken`);
        return response.data.decodedToken;

      }catch(error: unknown){
        console.error('An error occurred while verifying authentication', error);
        return false;
      }
    }
}

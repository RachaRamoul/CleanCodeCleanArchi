import axios from 'axios';
import { authService } from './authService'; 
import { API_BASE_URL_FASTIFY } from '../../config/api.config';
import { getToken } from '../utils/localStorage';

const fastifyApiClient = axios.create({
  baseURL: API_BASE_URL_FASTIFY,
  headers: {
    'Content-Type': 'application/json',
  },
});

fastifyApiClient.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

fastifyApiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      const errorMessage = error.response?.data?.message || '';
      
      if (errorMessage === 'Authorization token is required.' || errorMessage === 'Invalid or expired token.') {
        console.warn('Token expired.');
        authService.logout();
      }
    }
    return Promise.reject(error);
  }
);

export default fastifyApiClient;

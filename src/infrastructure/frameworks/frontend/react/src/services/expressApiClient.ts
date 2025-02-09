import axios from 'axios';
import { authService } from './authService'; 
import { API_BASE_URL_EXPRESS } from '../../config/api.config';
import { getToken } from '../utils/localStorage';

const expressApiClient = axios.create({
  baseURL: API_BASE_URL_EXPRESS,
  headers: {
    'Content-Type': 'application/json',
  },
});

expressApiClient.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

expressApiClient.interceptors.response.use(
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

export default expressApiClient;

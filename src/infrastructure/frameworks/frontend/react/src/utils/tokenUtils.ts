import { jwtDecode } from 'jwt-decode';
import { TokenPayload } from '../types/tokenPayload';
import { getToken } from './localStorage';


export const getCompanyIdFromToken = async (): Promise<string | null> => {
  try {
    const token: string | null = getToken();

    if (!token) {
      console.error("Token is missing or invalid.");
      return null;
    }
    const decodedToken: TokenPayload = jwtDecode(token);

    return decodedToken.id;

  } catch (error) {
    console.error('Invalid token:', error);
    return null;
  }
};

export const isAdminFromToken = (): boolean | null => {
  try {
    const token: string | null = getToken();

    if (!token) {
      console.error("Token is missing or invalid.");
      return null;
    }
    const decodedToken: TokenPayload = jwtDecode(token);
    
    return decodedToken.isAdmin;

  } catch (error) {
    console.error('Invalid token:', error);
    return null;
  }
};

import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://192.168.1.104:3002/api/v1/',
});

export interface GeneratedLogoResponse {
  id?: string;
  prompt: string;
  logo_style: string;
  image_url: string;
  created_at: any;
}

export interface CreateLogoData {
  prompt: string;
  logo_style: string;
}

export class ApiFunctions {
  static async getLogos(): Promise<GeneratedLogoResponse[]> {
    try {
      const response = await api.get('/logos');
      return response.data;
    } catch (error) {
      console.error('Error fetching logos:', error);
      throw error;
    }
  }
  static async getLatestLogo(): Promise<GeneratedLogoResponse> {
    try {
      const response = await api.get('/logos/latest');
      return response.data;
    } catch (error) {
      console.error('Error fetching latest logo:', error);
      throw error;
    }
  }
  static async createLogo(data: CreateLogoData): Promise<GeneratedLogoResponse> {
    try {
      const response = await api.post('/logos', data, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error creating logo:', error);
      throw error;
    }
  }
}

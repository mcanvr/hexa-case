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
  image_url: string;
}

export class ApiFunctions {
  static async getLogos(): Promise<GeneratedLogoResponse[]> {
    const response = await api.get('/logos');
    return response.data;
  }
  static async getLatestLogo(): Promise<GeneratedLogoResponse> {
    const response = await api.get('/logos/latest');
    return response.data;
  }
  static async createLogo(data: CreateLogoData): Promise<GeneratedLogoResponse> {
    const response = await api.post('/logos', data, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    return response.data;
  }
}

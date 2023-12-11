import axios, { AxiosResponse } from 'axios';
import { AUTH_URL, STORAGE_SERVICE_KEYS } from '@/utils/variables';
import { storageService } from '@/utils/services';

export const refreshToken = async (): Promise<void> => {
  try {
    const refreshToken = storageService.getItem<string>(STORAGE_SERVICE_KEYS.REFRESH_TOKEN);
    const response: AxiosResponse<any> = await axios.post(`${process.env['NEXT_PUBLIC_API_URL']}${AUTH_URL.REFRESH}`, {
      refreshToken,
    });
    storageService.setItem(STORAGE_SERVICE_KEYS.ACCESS_TOKEN, response.data.accessToken);
    storageService.setItem(STORAGE_SERVICE_KEYS.REFRESH_TOKEN, response.data.refreshToken);
  } catch (error) {
    storageService.deleteItem(STORAGE_SERVICE_KEYS.ACCESS_TOKEN);
    storageService.deleteItem(STORAGE_SERVICE_KEYS.REFRESH_TOKEN);
    throw error;
  }
};

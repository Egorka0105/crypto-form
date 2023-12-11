import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { refreshToken } from '@/utils/helpers/refresh-token';
import { storageService } from '@/utils/services';
import { STORAGE_SERVICE_KEYS } from '@/utils/variables';
import { redirect } from 'next/navigation';

const axiosConfig: AxiosRequestConfig = {
  baseURL: process.env['NEXT_PUBLIC_API_URL'],
};

const instance: AxiosInstance = axios.create(axiosConfig);

instance.interceptors.request.use(
  async (config) => {
    const accessToken = storageService.getItem<string>(STORAGE_SERVICE_KEYS.ACCESS_TOKEN);

    if (accessToken && config.headers) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },

  (error: AxiosError<string>) => {
    throw error;
  }
);

instance.interceptors.response.use(
  async (res: AxiosResponse) => res,

  async (error: AxiosError<string>) => {
    const status: number | undefined = error.response?.status;
    const originalRequest = error.config;

      console.log("eee" , error)

    // if user Unauthorized call refresh() which will delete the authorization tokens in case of an error
    if (status === 403 && originalRequest) {
      try {
        await refreshToken();
      } catch (error) {
        redirect('/login');
        return Promise.reject(error);
      }

      if (originalRequest.headers) {
        const accessToken = storageService.getItem<string>(STORAGE_SERVICE_KEYS.ACCESS_TOKEN);

        originalRequest.headers.Authorization = `Bearer ${accessToken}`;
      }

      return instance(originalRequest);
    }

    return Promise.reject(error);
  }
);

export const API = instance;

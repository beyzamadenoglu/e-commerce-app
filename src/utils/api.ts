import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const req = async <T>(
  path: string,
  method: 'GET' | 'POST' = 'GET',
  data?: Record<string, any>,
  options?: AxiosRequestConfig
): Promise<T> => {
  const url = `${API_BASE_URL}${path}`;

  const axiosOptions: AxiosRequestConfig = {
    method,
    url,
    headers: {
      'Content-Type': 'application/json',
      ...(options?.headers || {}),
    },
    ...(method === 'POST' && data ? { data } : {}),
    ...options,
  };

  try {
    const response: AxiosResponse<T> = await axios(axiosOptions);

    return response.data;
  } catch (error: any) {
    throw new Error(`API request error: ${error.message}`);
  }
};



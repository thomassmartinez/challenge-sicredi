import axios, {AxiosInstance} from 'axios';

export const Api = (): AxiosInstance => {
  const config = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });

  config.interceptors.response.use(
    (response) => response,
    (error) => error,
  );

  return config;
};

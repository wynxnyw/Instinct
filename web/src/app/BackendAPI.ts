import Axios, { AxiosInstance } from 'axios';

export const BackendAPI: AxiosInstance = Axios.create({
  baseURL: '/api',
});

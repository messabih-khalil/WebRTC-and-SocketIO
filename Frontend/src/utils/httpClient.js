import axios from 'axios';

export const httpClient = axios.create({
  baseURL: 'http://localhost:3232/api',
});

httpClient.interceptors.request.use(config => {
  let token = localStorage.getItem('token');

  if (token) {
    token = JSON.parse(token).token;
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

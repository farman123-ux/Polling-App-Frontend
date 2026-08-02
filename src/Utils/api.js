import axios from 'axios';

const getBaseUrl = () => {
  const url = import.meta.env.VITE_API_URL;
  if (!url) return '/api';
  return url.endsWith('/api') ? url : `${url}/api`;
};

// to create a single instance
const api = axios.create({
  baseURL: getBaseUrl(),
});

// to attach jwt token to any request //check user logged in or not
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api;
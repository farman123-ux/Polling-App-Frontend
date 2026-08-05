import axios from 'axios';

//to create a single instance 
const baseURL = import.meta.env.VITE_API_URL || "/api";
const api = axios.create({ baseURL });

//to attach jwt token to any request //check user logedin or not 
api.interceptors.request.use((config)=>{
      const token =localStorage.getItem("token");
      if(token) config.headers.Authorization = `Bearer ${token}`;
      return config;

});

export default api;
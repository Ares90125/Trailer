import axios from 'axios';
export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});
export const get = (url:string) => api.get(url);
export const post = (url:string, data:any) => api.post(url, data);


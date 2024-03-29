
import axios from 'axios';
const DEPLOYED='https://avid-mint-production.up.railway.app'
const LOCALHOST='http://localhost:9094'

export const API_BASE_URL = DEPLOYED

const api = axios.create({
  baseURL: API_BASE_URL,
});

const token = localStorage.getItem('jwt');

api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

api.defaults.headers.post['Content-Type'] = 'application/json';

export default api;

import { showError } from './utils';
import axios from 'axios';

export const API = axios.create({
    // baseURL: 'http://localhost:3001',
  baseURL: process.env.REACT_APP_SERVER ? process.env.REACT_APP_SERVER : '',
});

API.interceptors.response.use(
  (response) => response,
  (error) => {
    showError(error);
  }
);

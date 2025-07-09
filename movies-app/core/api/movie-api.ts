import axios from 'axios';

export const movieApi = axios.create({
  baseURL: process.env.EXPO_PUBLIC_MOVIES_DB_API_URL,
  params: {
    language: 'es-VE',
    api_key: process.env.EXPO_PUBLIC_MOVIES_DB_API_KEY,
  },
  headers: {
    'Content-Type': 'application/json',
  },
});

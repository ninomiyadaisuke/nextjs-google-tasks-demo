import axios from 'axios';

export const api = axios.create({
  timeout: 10000,
});

api.interceptors.response.use(
  (res) => {
    return Promise.resolve(res);
  },
  (error) => {
    return Promise.reject(error);
  },
);

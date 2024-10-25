import axios from 'axios';

export const fetchInterceptor = (apikey) => {
  const instance = axios.create({
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apikey,
    },
  });
  return instance;
};

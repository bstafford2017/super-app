import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.api-ninjas.com/',
  headers: {
    'X-Api-Key': 'f/Lbqc8xujCtqRs8bZgXlA==xWx0MnDFYDiRDCo7',
  },
  timeout: 5000,
});

export const serverless = axios.create({
  baseURL: 'https://tbd.com',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000,
});

import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.api-ninjas.com/',
  headers: {
    'X-Api-Key': 'f/Lbqc8xujCtqRs8bZgXlA==xWx0MnDFYDiRDCo7',
  },
  timeout: 5000,
});

export const genericAxios = axios.create({
  timeout: 5000,
});

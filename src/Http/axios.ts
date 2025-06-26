import axios from 'axios';

export default axios.create({
  baseURL: '/api/stage-prod',
  headers: {
    'X-Api-Key': 'f/Lbqc8xujCtqRs8bZgXlA==xWx0MnDFYDiRDCo7',
  },
  timeout: 5000,
});

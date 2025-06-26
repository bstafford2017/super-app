import axios from 'axios';

export default axios.create({
  baseURL: '/api/stage-prod',
  timeout: 5000,
});

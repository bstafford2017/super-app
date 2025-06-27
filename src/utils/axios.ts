import axios from 'axios';

export default axios.create({
  baseURL: '/stage-prod',
  timeout: 5000,
});

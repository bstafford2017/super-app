import axios from 'axios';

const isDev = process.env.NODE_ENV === 'development';
const baseURL = isDev ? '/api/stage-prod/' : '/stage-prod';

export default axios.create({
  baseURL,
  timeout: 30000,
});

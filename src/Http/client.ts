import axios from './axios';

const data: any = {};

export const preFetch = (): Promise<any> => {
  return Promise.all([
    getFact(),
    getTrivia(),
    getRiddle(),
    getDadJoke(),
    getQuote(),
    getAirQuality(),
    getBucketList(),
    getHobby(),
    getImage(),
    getWeather(),
    getWord(),
  ]);
};

export const getFact = (refresh: boolean = true): Promise<any> => {
  if (data.fact && !refresh) {
    return data.fact;
  }
  const res = axios.get('/v1/facts');
  data.fact = res;
  return res;
};

export const getTrivia = (refresh: boolean = true): Promise<any> => {
  if (data.trivia && !refresh) {
    return data.trivia;
  }
  const res = axios.get('/v1/trivia');
  data.trivia = res;
  return res;
};

export const getRiddle = (refresh: boolean = true): Promise<any> => {
  if (data.riddle && !refresh) {
    return data.riddle;
  }
  const res = axios.get('/v1/riddles');
  data.riddle = res;
  return res;
};

export const getDadJoke = (refresh: boolean = true): Promise<any> => {
  if (data.joke && !refresh) {
    return data.joke;
  }
  const res = axios.get('/v1/dadjokes?limit=1');
  data.joke = res;
  return res;
};

export const getQuote = (refresh: boolean = true): Promise<any> => {
  if (data.quote && !refresh) {
    return data.quote;
  }
  const res = axios.get('/v1/quotes');
  data.quote = res;
  return res;
};

export const getAirQuality = (refresh: boolean = true): Promise<any> => {
  if (data.airQuality && !refresh) {
    return data.airQuality;
  }
  const res = axios.get('/v1/airquality', {
    params: {
      city: 'Saint Paul',
    },
  });
  data.airQuality = res;
  return res;
};

export const getBucketList = (refresh: boolean = true): Promise<any> => {
  if (data.bucketList && !refresh) {
    return data.bucketList;
  }
  const res = axios.get('/v1/bucketlist');
  data.bucketList = res;
  return res;
};

export const getHobby = (refresh: boolean = true): Promise<any> => {
  if (data.hobby && !refresh) {
    return data.hobby;
  }
  const res = axios.get('/v1/hobbies', {
    params: {
      category: 'general',
    },
  });
  data.hobby = res;
  return res;
};

export const getImage = (refresh: boolean = true): Promise<any> => {
  if (data.image && !refresh) {
    return data.image;
  }
  const res = axios.get('/v1/randomimage', {
    params: {
      width: '960',
      height: '540',
    },
  });
  data.image = res;
  return res;
};

export const getWeather = (refresh: boolean = true): Promise<any> => {
  if (data.weather && !refresh) {
    return data.weather;
  }
  const res = axios.get('/v1/weather', {
    params: { zip: '55101' },
  });
  data.weather = res;
  return res;
};

export const getWord = (refresh: boolean = true): Promise<any> => {
  if (data.word && !refresh) {
    return data.word;
  }
  const res = axios.get('/v1/randomword');
  data.word = res;
  return res;
};

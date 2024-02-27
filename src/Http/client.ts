import { AxiosResponse } from 'axios';
import axios, { genericAxios } from './axios';
import {
  AirQualityResponse,
  BucketListResponse,
  DadJokeResponse,
  FactResponse,
  HobbyResponse,
  MemeResponse,
  MotivationResponse,
  PunResponse,
  QuoteResponse,
  RiddleResponse,
  TriviaResponse,
  WeatherResponse,
  WordResponse,
} from './types';
import { LOCATIONS } from '../Weather';

const data: any = {};

export const preFetch = (): Promise<any> => {
  return Promise.all([
    getFact(),
    getTrivia(),
    getRiddle(),
    getDadJoke(),
    getBucketList(),
    getHobby(),
    getImage(),
    getWeather(),
    getWord(),
    getQuote(),
    // getMotivation(),
    // getPun(),
    getMeme(),
  ]);
};

export const getFact = (
  refresh: boolean = true
): Promise<AxiosResponse<FactResponse[]>> => {
  if (data.fact && !refresh) {
    return data.fact;
  }
  const res = axios.get('/v1/facts');
  data.fact = res;
  return res;
};

export const getTrivia = (
  refresh: boolean = true
): Promise<AxiosResponse<TriviaResponse[]>> => {
  if (data.trivia && !refresh) {
    return data.trivia;
  }
  const res = axios.get('/v1/trivia');
  data.trivia = res;
  return res;
};

export const getRiddle = (
  refresh: boolean = true
): Promise<AxiosResponse<RiddleResponse[]>> => {
  if (data.riddle && !refresh) {
    return data.riddle;
  }
  const res = axios.get('/v1/riddles');
  data.riddle = res;
  return res;
};

export const getDadJoke = (
  refresh: boolean = true
): Promise<AxiosResponse<DadJokeResponse[]>> => {
  if (data.joke && !refresh) {
    return data.joke;
  }
  const res = axios.get('/v1/dadjokes?limit=1');
  data.joke = res;
  return res;
};

export const getBucketList = (
  refresh: boolean = true
): Promise<AxiosResponse<BucketListResponse>> => {
  if (data.bucketList && !refresh) {
    return data.bucketList;
  }
  const res = axios.get('/v1/bucketlist');
  data.bucketList = res;
  return res;
};

export const getHobby = (
  refresh: boolean = true
): Promise<AxiosResponse<HobbyResponse>> => {
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

export const getImage = (
  refresh: boolean = true
): Promise<AxiosResponse<any>> => {
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

export const getWeather = (
  refresh: boolean = true,
  zipcode: string = LOCATIONS[0].zipcode
): Promise<AxiosResponse<WeatherResponse>> => {
  if (data.weather && !refresh) {
    return data.weather;
  }
  const res = axios.get('/v1/weather', {
    params: { zip: zipcode },
  });
  data.weather = res;
  return res;
};

export const getWord = (
  refresh: boolean = true
): Promise<AxiosResponse<WordResponse>> => {
  if (data.word && !refresh) {
    return data.word;
  }
  const res = axios.get('/v1/randomword');
  data.word = res;
  return res;
};

export const getQuote = (
  refresh: boolean = true
): Promise<AxiosResponse<QuoteResponse[]>> => {
  if (data.quote && !refresh) {
    return data.quote;
  }
  const res = genericAxios.get('https://api.quotable.io/quotes/random');
  data.quote = res;
  return res;
};

export const getMotivation = (
  refresh: boolean = true
): Promise<AxiosResponse<MotivationResponse>> => {
  if (data.motivation && !refresh) {
    return data.quote;
  }
  const res = genericAxios.get('https://affirmations.dev');
  data.motivation = res;
  return res;
};

export const getMeme = (
  refresh: boolean = true
): Promise<AxiosResponse<MemeResponse>> => {
  if (data.meme && !refresh) {
    return data.meme;
  }
  const res = genericAxios.get('https://www.punapi.rest/api/meme');
  data.meme = res;
  return res;
};

export const getPun = (
  refresh: boolean = true
): Promise<AxiosResponse<PunResponse>> => {
  if (data.pun && !refresh) {
    return data.pun;
  }
  const res = genericAxios.get('https://www.punapi.rest/api/pun');
  data.pun = res;
  return res;
};

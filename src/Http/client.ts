import { AxiosResponse } from 'axios';
import axios from './axios';
import {
  AirQualityResponse,
  BucketListResponse,
  DadJokeResponse,
  FactResponse,
  HobbyResponse,
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

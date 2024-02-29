import { AxiosResponse } from 'axios';
import axios, { genericAxios } from './axios';
import {
  AdviceResponse,
  BucketListResponse,
  DadJokeResponse,
  FactResponse,
  HobbyResponse,
  NewsResponse,
  RiddleResponse,
  TriviaResponse,
  WeatherResponse,
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
    getQuote(),
    getNews(),
    getAdvice(),
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
): Promise<AxiosResponse<RiddleResponse>> => {
  if (data.riddle && !refresh) {
    return data.riddle;
  }
  const res = genericAxios.get('https://riddles-api.vercel.app/random');
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

export const getQuote = (
  refresh: boolean = true
): Promise<AxiosResponse<string[]>> => {
  if (data.quote && !refresh) {
    return data.quote;
  }
  const res = genericAxios.get(
    'https://ron-swanson-quotes.herokuapp.com/v2/quotes'
  );
  data.quote = res;
  return res;
};

export const getNews = (
  refresh: boolean = true
): Promise<AxiosResponse<NewsResponse>> => {
  if (data.news && !refresh) {
    return data.news;
  }
  const res = genericAxios.get('https://ok.surf/api/v1/cors/news-feed');
  data.news = res;
  return res;
};

export const getAdvice = (
  refresh: boolean = true
): Promise<AxiosResponse<AdviceResponse>> => {
  if (data.advice && !refresh) {
    return data.advice;
  }
  const res = genericAxios.get('https://api.adviceslip.com/advice');
  data.advice = res;
  return res;
};

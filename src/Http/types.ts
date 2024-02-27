export interface FactResponse {
  fact: string;
}

export interface TriviaResponse {
  question: string;
  answer: string;
}

export interface RiddleResponse {
  question: string;
  answer: string;
}

export interface DadJokeResponse {
  joke: string;
}

export interface AirQualityResponse {
  overall_aqi: string;
  CO: { concentration: string };
  PM10: { concentration: string };
  SO2: { concentration: string };
  'PM2.5': { concentration: string };
  O3: { concentration: string };
  NO2: { concentration: string };
}

export interface BucketListResponse {
  item: string;
}

export interface HobbyResponse {
  hobby: string;
  link: string;
}

export interface WeatherResponse {
  temp: string;
  feels_like: string;
  max_temp: string;
  min_temp: string;
  cloud_pct: string;
  wind_speed: string;
  sunrise: string;
  sunset: string;
}

export interface WordResponse {
  word: string;
}

export interface QuoteResponse {
  content: string;
  author: string;
}

export interface MotivationResponse {
  affirmation: string;
}

export interface MemeResponse {
  meme: string;
}

export interface PunResponse {
  pun: string;
}

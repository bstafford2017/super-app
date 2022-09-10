import axios from './axios'

export const getFact = (): Promise<any> => {
  return axios.get('/v1/facts')
}

export const getTrivia = (): Promise<any> => {
  return axios.get('/v1/trivia')
}

export const getRiddle = (): Promise<any> => {
  return axios.get('/v1/riddles')
}

export const getHistoricalEvent = (): Promise<any> => {
  return axios.get('/v1/historicalevents', {
    params: {
      month: new Date().getMonth(),
      day: new Date().getDate()
    }
  })
}

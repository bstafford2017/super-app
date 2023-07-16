import React, { CSSProperties } from 'react';
import Loader from '../Loader';
import useAxios from '../Hooks/useAxios';
import { getWeather } from '../Http/client';

const textStyle: CSSProperties = {
  color: 'white',
  fontSize: '42px',
  margin: '0px',
};

const leftAlign: CSSProperties = {
  textAlign: 'left',
};

const convertToFahrenheit = (val: string): number => {
  return Math.round(Number(val) * 1.8 + 32);
};

const Weather = () => {
  const [data, isLoading] = useAxios(getWeather);

  if (isLoading) {
    return <Loader />;
  }

  if (!data) {
    return null;
  }

  const {
    temp,
    feels_like,
    max_temp,
    min_temp,
    cloud_pct,
    wind_speed,
    sunrise,
    sunset,
  } = data || {};

  return (
    <div>
      <h2 style={textStyle}>
        <b>Saint Paul, MN</b>
      </h2>
      <table>
        <tr style={textStyle}>
          <td style={leftAlign}>Temperature:</td>
          <td>{convertToFahrenheit(temp)}&deg;F</td>
        </tr>
        <tr style={textStyle}>
          <td style={leftAlign}>Feels like:</td>
          <td>{convertToFahrenheit(feels_like)}&deg;F</td>
        </tr>
        <tr style={textStyle}>
          <td style={leftAlign}>High:</td>
          <td>{convertToFahrenheit(max_temp)}&deg;F</td>
        </tr>
        <tr style={textStyle}>
          <td style={leftAlign}>Low:</td>
          <td>{convertToFahrenheit(min_temp)}&deg;</td>
        </tr>
        <tr style={textStyle}>
          <td style={leftAlign}>Precipitation:</td>
          <td>{cloud_pct}%</td>
        </tr>
        <tr style={textStyle}>
          <td style={leftAlign}>Wind speed:</td>
          <td>{wind_speed}</td>
        </tr>
        <tr style={textStyle}>
          <td style={leftAlign}>Sunrise time:</td>
          <td>{new Date(sunrise).toTimeString().split(' ')[0]}</td>
        </tr>
        <tr style={textStyle}>
          <td style={leftAlign}>Sunset time:</td>
          <td>{new Date(sunset).toTimeString().split(' ')[0]}</td>
        </tr>
      </table>
    </div>
  );
};

export default Weather;

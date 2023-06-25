import React, { CSSProperties } from 'react';
import Loader from '../Loader';
import useFetch from '../Hooks';

const textStyle: CSSProperties = {
  color: 'white',
  fontSize: '42px',
  margin: '0px',
};

const Weather = () => {
  const [data, isLoading] = useFetch('/v1/weather', { zip: '55101' });

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
      <p style={textStyle}>
        <b>Saint Paul, MN</b>
      </p>
      <p style={textStyle}>Temperature: {temp}</p>
      <p style={textStyle}>Feels like: {feels_like}</p>
      <p style={textStyle}>High: {max_temp}</p>
      <p style={textStyle}>Low: {min_temp}</p>
      <p style={textStyle}>Chance of precipitation: {cloud_pct}</p>
      <p style={textStyle}>Wind speed: {wind_speed}</p>
      <p style={textStyle}>Sunrise time: {new Date(sunrise).toTimeString()}</p>
      <p style={textStyle}>Sunset time: {new Date(sunset).toTimeString()}</p>
    </div>
  );
};

export default Weather;

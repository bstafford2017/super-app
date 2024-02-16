import React, { CSSProperties, useEffect, useState } from 'react';
import Loader from '../Loader';
import useAxios from '../Hooks/useAxios';
import { getWeather } from '../Http/client';
import { WeatherResponse } from 'Http/types';

const textStyle: CSSProperties = {
  color: 'white',
  fontSize: '42px',
  margin: '0px',
};

const leftAlign: CSSProperties = {
  textAlign: 'left',
};

const buttonStyle: CSSProperties = {
  cursor: 'pointer',
  padding: '15px',
  fontFamily: 'Roboto',
  fontSize: '24px',
  borderRadius: '25px',
  borderStyle: 'solid',
  backgroundColor: 'rgba(0,0,0,0)',
  color: 'white',
  borderColor: 'white',
};
const convertToFahrenheit = (val: string): number => {
  return Math.round(Number(val) * 1.8 + 32);
};

export const LOCATIONS = [
  {
    name: 'Saint Paul, MN',
    zipcode: '55101',
  },
  {
    name: 'Kasson, MN',
    zipcode: '55944',
  },
  {
    name: 'Austin, TX',
    zipcode: '73301',
  },
  {
    name: 'Tuson, AZ',
    zipcode: '85701',
  },
];

const Weather = () => {
  const [data, isLoading, refresh] = useAxios<WeatherResponse>(getWeather);
  const [currentLocation, setCurrentLocation] = useState(LOCATIONS[0]);

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

  const onClickLocation = (e: any) => {
    const newLocation =
      LOCATIONS.find((l) => e.target.name === l.name) || LOCATIONS[0];
    setCurrentLocation(newLocation);
    refresh(newLocation.zipcode);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ margin: '10px' }}>
        {LOCATIONS.map((l) => (
          <button name={l.name} onClick={onClickLocation} style={buttonStyle}>
            {l.name}
          </button>
        ))}
      </div>
      <h2 style={textStyle}>
        <b>{currentLocation.name}</b>
      </h2>
      <table style={{ width: '100%' }}>
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
      </table>
    </div>
  );
};

export default Weather;

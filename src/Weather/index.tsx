import React, { CSSProperties, useEffect, useState } from 'react';
import Loader from '../Loader';
import useAxios from '../Hooks/useAxios';
import { getWeather } from '../Http/client';
import { WeatherResponse } from 'Http/types';
import styled from 'styled-components';

const Heading = styled.h2`
  color: white;
  font-size: 42px;
  margin: 0px;
`;

const TableRow = styled.tr`
  color: white;
  font-size: 42px;
  margin: 0px;
`;

const TableData = styled.td`
  text-align: left;
`;

const CustomButton = styled.button`
  cursor: pointer;
  padding: 15px;
  font-family: 'Roboto';
  font-size: 24px;
  border-radius: 25px;
  border-style: solid;
  background-color: rgba(0, 0, 0, 0);
  color: white;
  border-color: white;
`;

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
          <CustomButton name={l.name} onClick={onClickLocation}>
            {l.name}
          </CustomButton>
        ))}
      </div>
      <Heading>
        <b>{currentLocation.name}</b>
      </Heading>
      <table style={{ width: '100%' }}>
        <TableRow>
          <TableData>Temperature:</TableData>
          <td>{convertToFahrenheit(temp)}&deg;F</td>
        </TableRow>
        <TableRow>
          <TableData>Feels like:</TableData>
          <td>{convertToFahrenheit(feels_like)}&deg;F</td>
        </TableRow>
        <TableRow>
          <TableData>High:</TableData>
          <td>{convertToFahrenheit(max_temp)}&deg;F</td>
        </TableRow>
        <TableRow>
          <TableData>Low:</TableData>
          <td>{convertToFahrenheit(min_temp)}&deg;</td>
        </TableRow>
        <TableRow>
          <TableData>Precipitation:</TableData>
          <td>{cloud_pct}%</td>
        </TableRow>
        <TableRow>
          <TableData>Wind speed:</TableData>
          <td>{wind_speed}</td>
        </TableRow>
      </table>
    </div>
  );
};

export default Weather;

import React, { CSSProperties, useEffect, useState } from 'react';
import Loader from '../Loader';
import useAxios from '../Hooks/useAxios';
import { getWeather } from '../Http/client';
import { WeatherResponse } from 'Http/types';
import styled from 'styled-components';
import Table from './Table';

const Heading = styled.h2`
  color: white;
  font-size: 42px;
  margin: 0px;
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

  if (!data) {
    return null;
  }

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
      {isLoading ? <Loader /> : <Table {...data} />}
    </div>
  );
};

export default Weather;

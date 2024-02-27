import Loader from 'Loader';
import React from 'react';
import styled from 'styled-components';

const convertToFahrenheit = (val: string): number => {
  return Math.round(Number(val) * 1.8 + 32);
};

const TableRow = styled.tr`
  color: white;
  font-size: 42px;
  margin: 0px;
`;

const TableData = styled.td`
  text-align: left;
`;

export interface TableProps {
  temp: string;
  feels_like: string;
  max_temp: string;
  min_temp: string;
  cloud_pct: string;
  wind_speed: string;
}

const Table = ({
  temp,
  feels_like,
  max_temp,
  min_temp,
  cloud_pct,
  wind_speed,
}: TableProps) => {
  return (
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
  );
};

export default Table;

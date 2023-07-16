import React, { CSSProperties, useState } from 'react';
import Loader from '../Loader';
import useAxios from '../Hooks/useAxios';
import { getAirQuality } from '../Http/client';

const textStyle: CSSProperties = {
  color: 'white',
  fontSize: '42px',
  margin: '0px',
};

const leftAlign: CSSProperties = {
  textAlign: 'left',
};

const AirQuality = () => {
  const [data, isLoading] = useAxios(getAirQuality);

  if (isLoading) {
    return <Loader />;
  }

  if (!data) {
    return null;
  }

  const {
    overall_aqi,
    CO: { concentration: COConcentration },
    PM10: { concentration: PM10Concentration },
    SO2: { concentration: SO2Concentration },
    'PM2.5': { concentration: PM25Concentration },
    O3: { concentration: O3Concentration },
    NO2: { concentration: NO2Concentration },
  } = data || {};

  return (
    <div>
      <h2 style={textStyle}>
        <b>Saint Paul, MN</b>
      </h2>
      <table>
        <tr style={textStyle}>
          <td style={leftAlign}>Overall AQI:</td>
          <td>{overall_aqi}</td>
        </tr>
        <tr style={textStyle}>
          <td style={leftAlign}>Carbon dioxide (CO):</td>
          <td>{COConcentration}</td>
        </tr>
        <tr style={textStyle}>
          <td style={leftAlign}>Inhalable particiles (PM10):</td>
          <td>{PM10Concentration}</td>
        </tr>
        <tr style={textStyle}>
          <td style={leftAlign}>Fine inhalable particiles (PM2.5):</td>
          <td>{PM25Concentration}</td>
        </tr>
        <tr style={textStyle}>
          <td style={leftAlign}> Sulfur dioxide (S02):</td>
          <td>{SO2Concentration}</td>
        </tr>
        <tr style={textStyle}>
          <td style={leftAlign}>Ozone(02):</td>
          <td>{O3Concentration}</td>
        </tr>
        <tr style={textStyle}>
          <td style={leftAlign}>Nitrogen dioxide (N02):</td>
          <td>{NO2Concentration}</td>
        </tr>
      </table>
    </div>
  );
};

export default AirQuality;

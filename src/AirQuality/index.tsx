import React, { CSSProperties, useState } from 'react';
import Loader from '../Loader';
import useFetch from '../Hooks';

const textStyle: CSSProperties = {
  color: 'white',
  fontSize: '42px',
  margin: '0px',
};

const AirQuality = () => {
  const [data, isLoading] = useFetch('/v1/airquality', { city: 'Saint Paul' });

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
      <p style={textStyle}>
        <b>Saint Paul, MN</b>
      </p>
      <p style={textStyle}>Overall AQI: {overall_aqi}</p>
      <p style={textStyle}>
        Carbon dioxide (CO) concentration: {COConcentration}
      </p>
      <p style={textStyle}>
        Inhalable particiles (PM10) concentration: {PM10Concentration}
      </p>
      <p style={textStyle}>
        Fine inhalable particiles (PM2.5) concentration: {PM25Concentration}
      </p>
      <p style={textStyle}>
        Sulfur dioxide (S02) concentration: {SO2Concentration}
      </p>
      <p style={textStyle}>Ozone(02) concentration: {O3Concentration}</p>
      <p style={textStyle}>
        Nitrogen dioxide (N02) concentration: {NO2Concentration}
      </p>
    </div>
  );
};

export default AirQuality;

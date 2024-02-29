import React from 'react';
import { Grid } from '@giphy/react-components';
import { GiphyFetch } from '@giphy/js-fetch-api';

const gf = new GiphyFetch('NBObwbNi88T0VITz5wwxGscwFzXudlvd');

const Gif = () => {
  const fetchGifs = (offset: number) => gf.trending({ offset, limit: 10 });

  return <Grid width={800} columns={3} fetchGifs={fetchGifs} />;
};

export default Gif;

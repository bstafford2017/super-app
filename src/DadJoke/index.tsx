import React, { CSSProperties } from 'react';
import Loader from '../Loader';
import Button from '../Button';
import useAxios from '../Hooks/useAxios';
import { getDadJoke } from '../Http/client';
import { DadJokeResponse } from 'Http/types';

const textStyle: CSSProperties = {
  color: 'white',
  fontSize: '42px',
};

const DadJoke = () => {
  const [data, isLoading, refresh] = useAxios<DadJokeResponse[]>(getDadJoke);

  if (isLoading) {
    return <Loader />;
  }

  if (!data) {
    return null;
  }

  const firstJoke = data[0] || {};
  const { joke } = firstJoke;

  return (
    <div style={{ textAlign: 'center' }}>
      <p style={textStyle}>{joke}</p>
      <Button
        title="Generate new"
        onClick={() => {
          refresh();
        }}
      />
    </div>
  );
};

export default DadJoke;

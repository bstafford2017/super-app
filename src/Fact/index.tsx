import React, { CSSProperties, useEffect, useState } from 'react';
import { getFact } from '../Http/client';
import Loader from '../Loader';
import Button from '../Button';
import useAxios from '../Hooks/useAxios';
import { FactResponse } from 'Http/types';

const textStyle: CSSProperties = {
  color: 'white',
  fontSize: '42px',
};

const Fact = () => {
  const [data, isLoading, refresh] = useAxios<FactResponse[]>(getFact);

  if (isLoading) {
    return <Loader />;
  }

  if (!data) {
    return null;
  }

  const { fact } = data[0];

  return (
    <div style={{ textAlign: 'center' }}>
      <p style={textStyle}>{fact}</p>
      <Button title="Generate new" onClick={() => refresh()} />
    </div>
  );
};

export default Fact;

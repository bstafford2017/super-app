import React, { CSSProperties, useEffect, useState } from 'react';
import { getFact } from '../Http/client';
import Loader from '../Loader';
import Button from '../Button';
import useAxios from '../Hooks/useAxios';
import { FactResponse } from 'Http/types';
import styled from 'styled-components';

const Text = styled.p`
  color: black;
  font-size: 42px;
`;

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
      <Text>{fact}</Text>
      <Button title="Generate new" onClick={() => refresh()} />
    </div>
  );
};

export default Fact;

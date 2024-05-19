import React, { CSSProperties } from 'react';
import Loader from '../Loader';
import Button from '../Button';
import useAxios from '../Hooks/useAxios';
import { getDadJoke } from '../Http/client';
import { DadJokeResponse } from 'Http/types';
import styled from 'styled-components';

const Text = styled.p`
  color: black;
  font-size: 42px;
`;

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
      <Text>{joke}</Text>
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

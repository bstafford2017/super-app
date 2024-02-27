import React from 'react';
import useAxios from '../Hooks/useAxios';
import { getMotivation, getPun } from '../Http/client';
import { MotivationResponse, PunResponse } from '../Http/types';
import Loader from '../Loader';
import Button from '../Button';
import styled from 'styled-components';

const Text = styled.p`
  color: white;
  font-size: 42px;
`;

const Motivation = () => {
  const [data, isLoading, refresh] =
    useAxios<MotivationResponse>(getMotivation);

  if (isLoading) {
    return <Loader />;
  }

  if (!data) {
    return null;
  }

  return (
    <div>
      <Text>{data.affirmation}</Text>
      <Button
        title="Generate new"
        onClick={() => {
          refresh();
        }}
      />
    </div>
  );
};

export default Motivation;

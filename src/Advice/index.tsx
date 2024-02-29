import React from 'react';
import Loader from '../Loader';
import Button from '../Button';
import useAxios from '../Hooks/useAxios';
import { getAdvice } from '../Http/client';
import { AdviceResponse } from 'Http/types';
import styled from 'styled-components';

const Text = styled.p`
  color: white;
  font-size: 42px;
`;

const Advice = () => {
  const [data, isLoading, refresh] = useAxios<AdviceResponse>(getAdvice);

  if (isLoading) {
    return <Loader />;
  }

  if (!data) {
    return null;
  }

  const {
    slip: { advice },
  } = data;

  return (
    <div style={{ textAlign: 'center' }}>
      <Text>{advice}</Text>
      <Button
        title="Generate new"
        onClick={() => {
          refresh();
        }}
      />
    </div>
  );
};

export default Advice;

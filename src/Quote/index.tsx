import React from 'react';
import useAxios from '../Hooks/useAxios';
import { getQuote } from '../Http/client';
import Loader from '../Loader';
import Button from '../Button';
import styled from 'styled-components';

const Text = styled.p`
  color: black;
  font-size: 42px;
`;

const Quote = () => {
  const [data, isLoading, refresh] = useAxios<string[]>(getQuote);

  if (isLoading) {
    return <Loader />;
  }

  if (!data) {
    return null;
  }

  return (
    <div>
      <Text>{data[0]}</Text>
      <Button
        title="Generate new"
        onClick={() => {
          refresh();
        }}
      />
    </div>
  );
};

export default Quote;

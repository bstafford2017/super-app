import React from 'react';
import useAxios from '../Hooks/useAxios';
import { getQuote } from '../Http/client';
import { QuoteResponse } from '../Http/types';
import Loader from '../Loader';
import Button from '../Button';
import styled from 'styled-components';

const Text = styled.p`
  color: white;
  font-size: 42px;
`;

const Quote = () => {
  const [data, isLoading, refresh] = useAxios<QuoteResponse[]>(getQuote);

  if (isLoading) {
    return <Loader />;
  }

  if (!data) {
    return null;
  }

  const { content, author } = data[0];

  return (
    <div>
      <Text>{content}</Text>
      <Text>By: {author}</Text>
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

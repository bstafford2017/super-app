import React, { CSSProperties } from 'react';
import { getWord } from '../Http/client';
import Loader from '../Loader';
import useAxios from '../Hooks/useAxios';
import { WordResponse } from 'Http/types';
import styled from 'styled-components';

const Text = styled.p`
  color: white;
  font-size: 42px;
`;

const Word = () => {
  const [data, isLoading] = useAxios<WordResponse>(getWord);

  if (isLoading) {
    return <Loader />;
  }

  if (!data) {
    return null;
  }

  const { word } = data;

  return (
    <div>
      <Text>{word}</Text>
    </div>
  );
};

export default Word;

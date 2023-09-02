import React, { CSSProperties } from 'react';
import { getWord } from '../Http/client';
import Loader from '../Loader';
import useAxios from '../Hooks/useAxios';
import { WordResponse } from 'Http/types';

const textStyle: CSSProperties = {
  color: 'white',
  fontSize: '42px',
};

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
      <p style={textStyle}>{word}</p>
    </div>
  );
};

export default Word;

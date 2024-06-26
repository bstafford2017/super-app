import React, { CSSProperties, useEffect, useState } from 'react';
import { getTrivia } from '../Http/client';
import Loader from '../Loader';
import Button from '../Button';
import useAxios from '../Hooks/useAxios';
import { TriviaResponse } from 'Http/types';
import styled from 'styled-components';

const Text = styled.p`
  color: black;
  font-size: 42px;
`;

const Trivia = () => {
  const [data, isLoading, refresh] = useAxios<TriviaResponse[]>(getTrivia);

  const [showAnswer, setShowAnswer] = useState(false);

  const show = () => {
    setShowAnswer(true);
  };

  if (isLoading) {
    return <Loader />;
  }

  if (!data) {
    return null;
  }

  const { question, answer } = data[0] || {};

  return (
    <div style={{ textAlign: 'center' }}>
      <Text>Q: {question}</Text>
      {showAnswer && <Text>A: {answer} </Text>}
      <Button title="Show answer" disabled={showAnswer} onClick={show} />
      <Button
        title="Generate new"
        onClick={() => {
          refresh();
          setShowAnswer(false);
        }}
      />
    </div>
  );
};

export default Trivia;

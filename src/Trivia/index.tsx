import React, { CSSProperties, useEffect, useState } from 'react';
import { getTrivia } from '../Http/client';
import Loader from '../Loader';
import Button from '../Button';
import useAxios from '../Hooks/useAxios';

const textStyle: CSSProperties = {
  color: 'white',
  fontSize: '42px',
};

const Trivia = () => {
  const [data, isLoading, refresh] = useAxios(getTrivia);

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
    <div>
      <p style={textStyle}>Q: {question}</p>
      {showAnswer && <p style={textStyle}>A: {answer} </p>}
      <Button title="Show answer" disabled={showAnswer} onClick={show} />
      <Button
        title="Generate new"
        onClick={() => {
          refresh({});
          setShowAnswer(false);
        }}
      />
    </div>
  );
};

export default Trivia;

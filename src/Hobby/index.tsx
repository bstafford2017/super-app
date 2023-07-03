import React, { CSSProperties } from 'react';
import Loader from '../Loader';
import Button from '../Button';
import useAxios from '../Hooks/useAxios';
import { getHobby } from '../Http/client';

const textStyle: CSSProperties = {
  color: 'white',
  fontSize: '42px',
  display: 'block',
};

const Hobby = () => {
  const [data, isLoading, refresh] = useAxios(getHobby);

  if (isLoading) {
    return <Loader />;
  }

  if (!data) {
    return null;
  }

  const { hobby, link } = data;

  return (
    <div>
      <a href={link} style={textStyle}>
        {hobby}
      </a>
      <Button
        title="Generate new"
        onClick={() => {
          refresh({});
        }}
      />
    </div>
  );
};

export default Hobby;

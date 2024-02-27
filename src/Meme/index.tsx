import React from 'react';
import useAxios from '../Hooks/useAxios';
import { getMeme } from '../Http/client';
import { MemeResponse } from '../Http/types';
import Loader from '../Loader';
import Button from '../Button';

const Meme = () => {
  const [data, isLoading, refresh] = useAxios<MemeResponse>(getMeme);

  if (isLoading) {
    return <Loader />;
  }

  if (!data) {
    return null;
  }

  return (
    <div>
      <img src={data.meme} style={{ display: 'block' }} />
      <Button
        title="Generate new"
        onClick={() => {
          refresh();
        }}
      />
    </div>
  );
};

export default Meme;

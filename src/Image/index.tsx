import React, { CSSProperties } from 'react';
import Loader from '../Loader';
import Button from '../Button';
import useAxios from '../Hooks/useAxios';
import { getImage } from '../Http/client';

const textStyle: CSSProperties = {
  color: 'white',
  fontSize: '42px',
};

const Image = () => {
  const [data, isLoading, refresh] = useAxios<any>(getImage);

  if (isLoading) {
    return <Loader />;
  }

  if (!data) {
    return null;
  }

  return (
    <div>
      <img src={'data:image/png;base64,' + data} style={{ display: 'block' }} />
      <Button
        title="Generate new"
        onClick={() => {
          refresh();
        }}
      />
    </div>
  );
};

export default Image;

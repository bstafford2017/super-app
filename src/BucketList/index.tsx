import React, { CSSProperties } from 'react';
import Loader from '../Loader';
import Button from '../Button';
import useAxios from '../Hooks/useAxios';
import { getBucketList } from '../Http/client';

const textStyle: CSSProperties = {
  color: 'white',
  fontSize: '42px',
};

const BucketList = () => {
  const [data, isLoading, refresh] = useAxios(getBucketList);

  if (isLoading) {
    return <Loader />;
  }

  if (!data) {
    return null;
  }

  const { item } = data;

  return (
    <div>
      <p style={textStyle}>{item}</p>
      <Button
        title="Generate new"
        onClick={() => {
          refresh({});
        }}
      />
    </div>
  );
};

export default BucketList;

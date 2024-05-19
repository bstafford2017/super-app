import React, { CSSProperties } from 'react';
import Loader from '../Loader';
import Button from '../Button';
import useAxios from '../Hooks/useAxios';
import { getBucketList } from '../Http/client';
import { BucketListResponse } from 'Http/types';
import styled from 'styled-components';

const Text = styled.p`
  color: black;
  font-size: 42px;
`;

const BucketList = () => {
  const [data, isLoading, refresh] =
    useAxios<BucketListResponse>(getBucketList);

  if (isLoading) {
    return <Loader />;
  }

  if (!data) {
    return null;
  }

  const { item } = data;

  return (
    <div style={{ textAlign: 'center' }}>
      <Text>{item}</Text>
      <Button
        title="Generate new"
        onClick={() => {
          refresh();
        }}
      />
    </div>
  );
};

export default BucketList;

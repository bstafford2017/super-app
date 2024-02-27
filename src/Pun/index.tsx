import React from 'react';
import useAxios from '../Hooks/useAxios';
import { getPun } from '../Http/client';
import { PunResponse } from '../Http/types';
import Loader from '../Loader';
import Button from '../Button';
import styled from 'styled-components';

const Text = styled.p`
  color: white;
  font-size: 42px;
`;

const Pun = () => {
  const [data, isLoading, refresh] = useAxios<PunResponse>(getPun);

  if (isLoading) {
    return <Loader />;
  }

  if (!data) {
    return null;
  }

  return (
    <div>
      <Text>{data.pun}</Text>
      <Button
        title="Generate new"
        onClick={() => {
          refresh();
        }}
      />
    </div>
  );
};

export default Pun;

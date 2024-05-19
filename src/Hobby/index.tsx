import React, { CSSProperties } from 'react';
import Loader from '../Loader';
import Button from '../Button';
import useAxios from '../Hooks/useAxios';
import { getHobby } from '../Http/client';
import { HobbyResponse } from 'Http/types';
import styled from 'styled-components';

const Text = styled.a`
  color: black;
  font-size: 42px;
  display: block;
`;

const Hobby = () => {
  const [data, isLoading, refresh] = useAxios<HobbyResponse>(getHobby);

  if (isLoading) {
    return <Loader />;
  }

  if (!data) {
    return null;
  }

  const { hobby, link } = data;

  return (
    <div style={{ textAlign: 'center' }}>
      <Text href={link}>{hobby}</Text>
      <Button
        title="Generate new"
        onClick={() => {
          refresh();
        }}
      />
    </div>
  );
};

export default Hobby;

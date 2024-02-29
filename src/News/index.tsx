import React from 'react';
import useAxios from '../Hooks/useAxios';
import { getNews } from '../Http/client';
import { NewsResponse } from '../Http/types';
import Loader from '../Loader';
import styled from 'styled-components';

const Text = styled.p`
  color: white;
  font-size: 42px;
`;

const InnerText = styled.p`
  color: white;
  font-size: 18px;
`;

const Link = styled.a`
  text-decoration-color: white;
  font-weight: bold;
`;

const News = () => {
  const [data, isLoading] = useAxios<NewsResponse>(getNews);

  if (isLoading) {
    return <Loader />;
  }

  if (!data) {
    return null;
  }

  const { Business, Technology } = data;

  return (
    <div>
      <Text>Business News</Text>
      {Business.map((b) => (
        <>
          <Link href={b.link}>
            <InnerText>{b.title}</InnerText>
          </Link>
          <InnerText>By: {b.source}</InnerText>
        </>
      ))}
      <Text>Technology News</Text>
      {Technology.map((t) => (
        <>
          <Link href={t.link}>
            <InnerText>{t.title}</InnerText>
          </Link>
          <InnerText>By: {t.source}</InnerText>
        </>
      ))}
    </div>
  );
};

export default News;

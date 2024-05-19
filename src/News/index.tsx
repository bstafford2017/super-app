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

  const { Business, Technology, Health, Science, Sports, Entertainment } = data;

  const {
    link: businessLink,
    title: businessTitle,
    source: businessSource,
    og: businessImage,
  } = Business[0];
  const {
    link: technologyLink,
    title: technologyTitle,
    source: technologySource,
    og: technologyImage,
  } = Technology[0];
  const {
    link: entertainmentLink,
    title: entertainmentTitle,
    source: entertainmentSource,
    og: entertainmentImage,
  } = Entertainment[0];
  const {
    link: healthLink,
    title: healthTitle,
    source: healthSource,
    og: healthImage,
  } = Health[0];
  const {
    link: scienceLink,
    title: scienceTitle,
    source: scienceSource,
    og: scienceImage,
  } = Science[0];
  const {
    link: sportsLink,
    title: sportsTitle,
    source: sportsSource,
    og: sportsImage,
  } = Sports[0];
  return (
    <div>
      <Text>Business News</Text>
      <Link href={businessLink}>
        <InnerText>{businessTitle}</InnerText>
      </Link>
      <img src={businessImage} />
      <InnerText>By: {businessSource}</InnerText>
      <Text>Technology News</Text>
      <Link href={technologyLink}>
        <InnerText>{technologyTitle}</InnerText>
      </Link>
      <img src={technologyImage} />
      <InnerText>By: {technologySource}</InnerText>
      <Text>Entertainment News</Text>
      <Link href={entertainmentLink}>
        <InnerText>{entertainmentTitle}</InnerText>
      </Link>
      <img src={entertainmentImage} />
      <InnerText>By: {entertainmentSource}</InnerText>
      <Text>Health News</Text>
      <Link href={healthLink}>
        <InnerText>{healthTitle}</InnerText>
      </Link>
      <img src={healthImage} />
      <InnerText>By: {healthSource}</InnerText>
      <Text>Science News</Text>
      <Link href={scienceLink}>
        <InnerText>{scienceTitle}</InnerText>
      </Link>
      <img src={scienceImage} />
      <InnerText>By: {scienceSource}</InnerText>
      <Text>Sports News</Text>
      <Link href={sportsLink}>
        <InnerText>{sportsTitle}</InnerText>
      </Link>
      <img src={sportsImage} />
      <InnerText>By: {sportsSource}</InnerText>
    </div>
  );
};

export default News;

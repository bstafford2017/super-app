import React from 'react';
import { Card, Typography, Grid } from '@mui/material';
import styled from 'styled-components';

const topics = [
  { label: 'trivia', icon: '💡' },
  { label: 'history', icon: '📜' },
  { label: 'science', icon: '🔬' },
  { label: 'technology', icon: '💾' },
  { label: 'art', icon: '🎨' },
  { label: 'literature', icon: '📚' },
  { label: 'music', icon: '🎵' },
  { label: 'sports', icon: '⚽' },
  { label: 'geography', icon: '🌍' },
  { label: 'food', icon: '🍽️' },
  { label: 'health', icon: '❤️' },
];

interface TopicCardProps {
  $selected?: boolean;
}

const TopicCard = styled(Card)<TopicCardProps>`
  display: flex;
  align-items: center;
  color: white;
  padding: 10px 35px 35px 10px;
  width: 220px;
  cursor: pointer;
  background-color: ${(props) =>
    props.$selected ? '#3f51b5' : '#121212'} !important;

  &:hover {
    transition: background-color 0.5s ease;
    background-color: #3f51b5 !important;
  }
`;

export const List = ({ onClick }: { onClick: (topic: string) => void }) => {
  const [selectedTopic, setSelectedTopic] = React.useState<string>('');

  const handleTopicClick = (topic: string) => {
    if (onClick) {
      onClick(topic);
    }
  };

  return (
    <Grid container spacing={3} justifyContent="center" sx={{ margin: 2 }}>
      {topics.map((topic, index) => (
        <Grid
          key={index}
          size={{ xs: 12, sm: 4, md: 3 }}
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          <TopicCard
            $selected={selectedTopic === topic.label}
            onClick={() => {
              handleTopicClick(topic.label);
              setSelectedTopic(topic.label);
            }}
          >
            <Typography variant="body2" style={{ marginRight: 8 }}>
              {topic.label.charAt(0).toUpperCase() + topic.label.slice(1)}
            </Typography>
            <span style={{ fontSize: 20 }}>{topic.icon}</span>
          </TopicCard>
        </Grid>
      ))}
    </Grid>
  );
};

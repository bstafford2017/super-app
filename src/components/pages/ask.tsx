import React from 'react';
import styled from 'styled-components';
import { useAsk } from 'queries/use-ask';
import { CircularProgress, TextField, Typography } from '@mui/material';
import { List } from './recommend/list';
import { useRecommend } from 'queries/use-recommend';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #282c34;
`;

const ResponseWrapper = styled.div`
  min-height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const InputRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 600px;
  margin-bottom: 150px;
`;

interface FactProps {
  accessToken: string | null;
}

const cleanResponse = (response: string) => {
  const parts = response.split(':');
  if (response.includes(':') && parts.length > 1) {
    return parts[1].trim();
  }
  return response;
};

const Fact = ({ accessToken }: FactProps) => {
  const { data: askData = {}, mutate: ask, isPending: isPendingAsk } = useAsk();
  const {
    data: recommendData = {},
    mutate: recommend,
    isPending: isPendingRecommend,
  } = useRecommend();

  const [prompt, setPrompt] = React.useState<string>(
    'Tell me a fact about the world!'
  );
  const [conversation, setConversation] = React.useState<
    {
      role: 'user' | 'assistant';
      text: string;
    }[]
  >([]);

  const { data: axiosAskData = {} } = askData as any;
  const { response: askResponse = '' } = axiosAskData;

  const { data: axiosRecommendData = {} } = recommendData as any;
  const { response: recommendResponse = '' } = axiosRecommendData;

  const onSubmit = () => {
    if (!prompt || prompt.trim() === '') return;

    ask(
      { prompt, accessToken, conversation_history: conversation },
      {
        onSuccess: () => {
          setConversation((prev) => [
            ...prev,
            { role: 'user', text: prompt },
            {
              role: 'assistant',
              text: askResponse || cleanResponse(recommendResponse),
            },
          ]);
        },
      }
    );
  };

  const onRecommendClick = (topic: string) => {
    recommend({ topic, accessToken });
    setPrompt(`Tell me a fact about ${topic}`);
  };

  return (
    <Container>
      <List onClick={onRecommendClick} />
      <ResponseWrapper>
        {isPendingAsk || isPendingRecommend ? (
          <CircularProgress color="info" />
        ) : (
          <Typography
            variant="h6"
            style={{
              color: 'white',
              textAlign: 'center',
              paddingTop: '55px',
              paddingBottom: '55px',
            }}
          >
            {askResponse ||
              cleanResponse(recommendResponse) ||
              'No response yet'}
          </Typography>
        )}
      </ResponseWrapper>
      <InputRow>
        <TextField
          fullWidth
          label="Ask a question"
          variant="outlined"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              onSubmit();
            }
          }}
        />
      </InputRow>
    </Container>
  );
};

export default Fact;

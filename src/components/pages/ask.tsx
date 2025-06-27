import React from 'react';
import styled from 'styled-components';
import { useAsk } from 'queries/use-ask';
import { CircularProgress, TextField, Typography } from '@mui/material';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
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
  margin-top: 20px;
  width: 100%;
  max-width: 600px;
`;

interface FactProps {
  accessToken: string | null;
}

const Fact = ({ accessToken }: FactProps) => {
  const { data = {}, mutate: ask, isPending } = useAsk();

  const [prompt, setPrompt] = React.useState<string>(
    'Tell me a fact about the world!'
  );

  const { data: axiosData = {} } = data as any;
  const { response = '' } = axiosData;

  const onSubmit = () => {
    ask({ prompt, accessToken });
  };

  return (
    <Container>
      <ResponseWrapper>
        {isPending ? (
          <CircularProgress color="info" />
        ) : (
          <Typography
            variant="h6"
            style={{
              color: 'white',
              textAlign: 'center',
              paddingBottom: '55px',
            }}
          >
            {response || 'No response yet'}
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

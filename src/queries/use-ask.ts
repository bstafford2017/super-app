import { useMutation } from '@tanstack/react-query';
import axios from 'utils/axios';

export const useAsk = () => {
  return useMutation({
    mutationKey: ['ask'],
    mutationFn: ({
      prompt,
      accessToken,
      conversation_history,
    }: {
      prompt: string;
      accessToken: string | null;
      conversation_history?: any;
    }) => {
      const body: any = { prompt, conversation_history };
      return axios.post('/ask', body, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
    },
  });
};

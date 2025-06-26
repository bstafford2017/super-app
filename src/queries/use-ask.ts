import { useMutation } from '@tanstack/react-query';
import axios from 'http/axios';

export const useAsk = () => {
  return useMutation({
    mutationKey: ['ask'],
    mutationFn: ({
      prompt,
      accessToken,
    }: {
      prompt: string;
      accessToken: string | null;
    }) => {
      return axios.post(
        '/ask',
        {
          prompt,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
    },
  });
};

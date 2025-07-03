import { useMutation } from '@tanstack/react-query';
import axios from 'utils/axios';

export const useRecommend = () => {
  return useMutation({
    mutationKey: ['recommend'],
    mutationFn: ({
      topic,
      accessToken,
    }: {
      topic: string;
      accessToken: string | null;
    }) => {
      return axios.post(
        '/recommend',
        {
          topic,
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

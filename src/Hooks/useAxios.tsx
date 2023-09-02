import React, { useEffect, useState } from 'react';
import { AxiosError, AxiosResponse } from 'axios';

const useAxios = <T,>(
  funct: (val: boolean) => Promise<AxiosResponse<T>>
): [
  T | null,
  boolean,
  () => Promise<void>,
  AxiosError<unknown, any> | null
] => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<AxiosError | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [shouldRefresh, _refresh] = useState<any>({});

  const fetch = async (refresh: boolean): Promise<void> => {
    setIsLoading(true);
    try {
      const { data: res } = await funct(refresh);
      setData(res);
    } catch (e) {
      setError(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      fetch(false);
    })();
  }, [funct, shouldRefresh]);

  return [
    data,
    isLoading,
    async () => {
      fetch(true);
    },
    error,
  ];
};

export default useAxios;

import React, { useEffect, useState } from 'react';

const useAxios = (funct: (val: boolean) => any) => {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [shouldRefresh, refresh] = useState<any>({});

  const fetch = async (refresh: boolean) => {
    setIsLoading(true);
    try {
      const { data: res } = await funct(refresh);
      setData(res);
    } catch (e) {
      console.error(e);
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
  ];
};

export default useAxios;

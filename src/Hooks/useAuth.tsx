import React from 'react';
import useAxios from './useAxios';
import { authStatus } from '../Http/client';
import { AuthStatus, AuthStatusResponse } from 'Http/types';

const useAuth = (): [boolean, boolean, Function] => {
  const [data, isLoading, refresh, error] = useAxios<AuthStatus>(authStatus);

  return [!!(data && !error), isLoading, refresh];
};

export default useAuth;

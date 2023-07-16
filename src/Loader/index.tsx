import React from 'react';
import { PuffLoader } from 'react-spinners';

const Loader = (): JSX.Element | null => {
  return <PuffLoader color="white" loading={true} size={75} />;
};

export default Loader;

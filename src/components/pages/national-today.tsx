import React from 'react';

const NationalToday = () => {
  return (
    <iframe
      src="https://nationaltoday.com/"
      title="National Today"
      style={{
        display: 'block',
        width: '100vw',
        height: '100vh',
        maxWidth: '100%',
        margin: 0,
        padding: 0,
        border: '0 none',
        boxSizing: 'border-box',
      }}
    />
  );
};

export default NationalToday;

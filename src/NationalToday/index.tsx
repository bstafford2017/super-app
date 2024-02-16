import React from 'react';

const NationalToday = () => {
  return (
    <div>
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
      ></iframe>
    </div>
  );
};

export default NationalToday;

// ProgressBar.js
import React from 'react';

const ProgressBar = ({ percentage }) => {
  return (
    <div style={{ width: '100%', height: '20px', background: '#ddd' }}>
      <div
        style={{
          width: `${percentage}%`,
          height: '100%',
          background: '#4caf50',
          transition: 'width 0.5s',
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;

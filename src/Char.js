import React from 'react';

const Char = ({children, cover}) => (
  <span className={cover ? 'cover' : ''}>
    {children}
  </span>
);

export default Char;

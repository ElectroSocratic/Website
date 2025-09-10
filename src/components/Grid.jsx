import React from 'react';

export default function Grid({ children, className = '', ...rest }){
  return (
    <div className={`grid ${className}`} {...rest}>
      {children}
    </div>
  );
}

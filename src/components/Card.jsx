import React from 'react';

export default function Card({ as: Component = 'div', href, children, className = '', ...rest }){
  const props = { className: `card ${className}`, ...rest };
  if(href){
    return (
      <a {...props} href={href}>
        {children}
      </a>
    );
  }
  return <Component {...props}>{children}</Component>;
}

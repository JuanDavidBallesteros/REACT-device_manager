import React from 'react';

function Input({ type = "text", placeholder, className }) {
  return (
    <input
      type={type}
      id="name"
      className={className}
      placeholder={placeholder}
    />
  );
}

export default Input;
import React from 'react';

function Input({ type = "text", placeholder, className, onInput, name }) {
  return (
    <input
      type={type}
      id={name}
      className={className}
      placeholder={placeholder}
      onInput={onInput}
    />
  );
}

export default Input;
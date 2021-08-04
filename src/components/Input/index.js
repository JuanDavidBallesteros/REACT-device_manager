import React from 'react';

function Input({ type = "text", placeholder, className, onInput, name, value }) {
  return (
    <input
      type={type}
      id={name}
      className={className}
      placeholder={placeholder}
      onInput={onInput}
      defaultValue={value}
    />
  );
}

export default Input;
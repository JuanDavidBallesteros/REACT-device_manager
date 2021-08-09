import React from 'react';

function Select({ options = [], fieldName = 'Empty', className, onChange = () => { }, name, value }) {
  return (

    <div className="col">
      <select className={className}
        id={name}
        onChange={onChange}
        value={value}
      >
        <option value="">{fieldName}</option>
        {options.map(({ value, tag }, index) => (
          <option key={`${fieldName}-${value}-${index}`}
            value={value}
          >
            {tag}
          </option>
        ))}
      </select>
    </div>

  );
}

export default Select;


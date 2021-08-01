import React from 'react';

function Select({ options = [], fielName = 'Empty', className, onChange = () => { }, name }) {
  return (

    <div className="col">
      <select className={className}
        id={name}
        onChange={onChange}
      >
        <option value="">{fielName}</option>
        {options.map(({ value, tag }, index) => (
          <option key={`${fielName}-${value}-${index}`}
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


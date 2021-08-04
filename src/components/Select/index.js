import React from 'react';

function Select({ options = [], fielName = 'Empty', className, onChange = () => { }, name, value }) {
  return (

    <div className="col">
      <select className={className}
        id={name}
        onChange={onChange}
        value={value}
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


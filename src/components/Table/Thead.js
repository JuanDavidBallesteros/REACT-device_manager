import React from 'react';

function Thead({ columns }) {
  return (
    <thead>
      <tr className="title1">
        <th scope="col">#</th>
        {columns.map((column) => (
          <th key={`th-${column}`} scope="col">{column.toUpperCase()}</th>
        ))}
        <th scope="col"> </th>
      </tr>
    </thead>
  );
}

export default Thead;

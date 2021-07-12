import React from 'react';
import './Table.css';

function Table() {
  return (
    <div className="container-fluid boxCentered">
      <table className="table table-dark">
        <thead>
          <tr className="title1">
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Zone</th>
            <th scope="col">ID</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody id="devicesList">
        </tbody>
      </table>
    </div>

  );
}

export default Table;
import React from 'react';
import './Table.css';
import Thead from './Thead';
import Row from './Row';

function Table({ entities = [], updateEntity, deEntity, columns = [] }) {

  return (
    <div className="container-fluid boxCentered">
      <table className="table table-dark">
        <Thead columns={columns} />
        <tbody id="devicesList">
          {""}
          {
            entities.map((entity, index) =>
              <Row key={`row-${index}`} entity={entity} index={index} updateEntity={updateEntity} deEntity={deEntity} columns={columns} />
            )
          }
        </tbody>
      </table>
    </div>
  );
}

export default Table;
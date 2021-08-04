import React from 'react';
import './Table.css';
import Thead from './Thead';
import Row from './Row';

function Table({ entities = [], updateEntity, deEntity }) {
  const columns = entities.length > 0 ? Object.keys(entities[0]) : [];
  return (
    <div className="container-fluid boxCentered">
      <table className="table table-dark">
        <Thead columns={columns} />
        <tbody id="devicesList">
          {""}
          {
            entities.map((entity, index) =>
              <Row key={`row-${index}`} entity={entity} index={index} updateEntity={updateEntity} deEntity={deEntity} />
            )
          }
        </tbody>
      </table>
    </div>
  );
}

export default Table;
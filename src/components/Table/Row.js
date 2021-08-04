import React from 'react';
import ActionButton from '../../ActionButton';

function Row({ entity, index, updateEntity, deEntity }) {

  return (
    <tr>
      <th className="title1" scope="row">{index + 1}</th>
      <td>{entity.zone}</td>
      <td>{entity.name}</td>
      <td>{entity.id}</td>
      <td>{entity.deviceType}</td>
      <td>
        <div className="btn-group" role="group" aria-label="Basic example">
          <ActionButton type={'edit'} index={index} updateEntity={updateEntity} />
          <ActionButton type={'delete'} deEntity={deEntity} index={index} />
        </div>
      </td>
    </tr>
  );
}

export default Row;
import React from 'react';
import ActionButton from '../../ActionButton';

function Row({ entity, index }) {

  return (
    <tr>
      <th className="title1" scope="row">{index + 1}</th>
      <td>{entity.zone}</td>
      <td>{entity.name}</td>
      <td>{entity.deviceType}</td>
      <td>{entity.id}</td>
      <td>
        <div className="btn-group" role="group" aria-label="Basic example">
          <ActionButton type={'edit'} />
          <ActionButton type={'delete'} />
        </div>
      </td>
    </tr>
  );
}

export default Row;
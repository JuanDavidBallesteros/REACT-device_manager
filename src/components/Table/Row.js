import React from 'react';
import ActionButton from '../../ActionButton';

function Row({ device, index }) {

  return (
    <tr>
      <th className="title1" scope="row">{index + 1}</th>
      <td>{device.zone}</td>
      <td>{device.name}</td>
      <td>{device.deviceType}</td>
      <td>{device.id}</td>
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
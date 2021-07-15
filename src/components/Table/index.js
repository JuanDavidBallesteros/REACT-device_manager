import React, { useState } from 'react';
import './Table.css';
import Thead from './Thead';
import Row from './Row';

function Table() {
  const [devices] = useState([
    {
      zone: 'Living room',
      name: 'Beo play sound',
      deviceType: 'Player',
      id: '#PS-122'
    },
    {
      zone: 'Bed room',
      name: 'Beo play sound',
      deviceType: 'Player',
      id: '#PS-13242'
    },
    {
      zone: 'Workshop',
      name: 'Beo play sound',
      deviceType: 'Player',
      id: '#PS-324222'
    }
  ]);

  const columns = devices.length > 0 ? Object.keys(devices[0]) : [];

  return (
    <div className="container-fluid boxCentered">
      <table className="table table-dark">
        <Thead columns={columns} />
        <tbody id="devicesList">
          {" "}
          {
            devices.map((device, index) =>
              <Row device={device} index={index} />
            )
          }
        </tbody>
      </table>
    </div>

  );
}

export default Table;
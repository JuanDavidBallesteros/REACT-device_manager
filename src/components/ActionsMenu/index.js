import React from 'react';
import './ActionsMenu.css';

function ActionsMenu() {
  return (
    <div className="container-fluid boxHs">
      <h1 className="title">Devices</h1>
      <button type="button" className="btn btn-light" id="addDeviceButton" data-toggle="modal" data-target="#exampleModal">Add
        Device</button>
    </div>
  );
}

export default ActionsMenu;
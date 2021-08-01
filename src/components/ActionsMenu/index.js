import React from 'react';
import './ActionsMenu.css';

function ActionsMenu({ displayModal, title, saveModal }) {
  return (
    <div className="container-fluid boxHs">
      <h1 className="title">{title}</h1>
      <button
        type="button"
        className="btn btn-light"
        id="addDeviceButton"
        data-toggle="modal"
        data-target="#exampleModal"
        onClick={() => {
          saveModal();
          displayModal();
        }}
      >
        Add Device
      </button>
    </div>
  );
}

export { ActionsMenu as default };
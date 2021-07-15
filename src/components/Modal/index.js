import React from 'react';
import { alertConfiguration } from '../Alert';


function Modal({ displayAlert }) {
  const saveAction = () => {
    alertConfiguration('success', 'Device Saved');
    displayAlert();
  }
  return (
    <div className="modal fade w3-animate-zoom" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="alert alert-danger d-none" role="alert" id="alertModal">
          </div>
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Add new device</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form id="form">
              <input type="hidden" id="index" />
              <div className="form-row">
                <div className="col">

                  <select className="form-control" id="zone">
                    <option>Zone</option>
                    <option>Living room</option>
                    <option>Bed room 1</option>
                    <option>Bed room 2</option>
                    <option>Bathroom</option>
                    <option>Kitchen</option>
                  </select>

                </div>
              </div>
              <div className="form-row">
                <div className="col">
                  <input type="text" id="name" className="form-control" placeholder="Name" />
                </div>
                <div className="col">
                  <select className="form-control" id="deviceType">
                    <option>Device Type</option>
                    <option>Monitoring</option>
                    <option>Temperature</option>
                    <option>Security</option>
                    <option>Light</option>
                    <option>Player</option>
                  </select>
                </div>
                <div className="col">
                  <input type="text" id="id" className="form-control" placeholder="ID" />
                </div>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-outline-secondary" data-dismiss="modal" id="cancelDevice">Close</button>
            <button type="button" className="btn btn-info" id="addDevice" data-dismiss="modal"
              onClick={saveAction}
            >Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
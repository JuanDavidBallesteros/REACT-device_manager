import React from 'react';


function Modal() {
  return (
    <div class="modal fade w3-animate-zoom" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="alert alert-danger d-none" role="alert" id="alertModal">
          </div>
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Add new device</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form id="form">
              <input type="hidden" id="index" />
              <div class="form-row">
                <div class="col">

                  <select class="form-control" id="zone">
                    <option>Zone</option>
                    <option>Living room</option>
                    <option>Bed room 1</option>
                    <option>Bed room 2</option>
                    <option>Bathroom</option>
                    <option>Kitchen</option>
                  </select>

                </div>
              </div>
              <div class="form-row">
                <div class="col">
                  <input type="text" id="name" class="form-control" placeholder="Name" />
                </div>
                <div class="col">
                  <select class="form-control" id="deviceType">
                    <option>Device Type</option>
                    <option>Monitoring</option>
                    <option>Temperature</option>
                    <option>Security</option>
                    <option>Light</option>
                    <option>Player</option>
                  </select>
                </div>
                <div class="col">
                  <input type="text" id="id" class="form-control" placeholder="ID" />
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal" id="cancelDevice">Close</button>
            <button type="button" class="btn btn-info" id="addDevice" >Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
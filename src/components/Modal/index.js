import React from 'react';
import { alertConfiguration } from '../Alert';
import ModalHeader from './ModalHeader';
import './Modal.css';
import ModalFooter from './ModalFooter';


function Modal({ displayAlert, hideAlert, update = false, inputHandler, sendData, object = {}, title, children = [] }) {
  const saveAction = () => {
    sendData();
    alertConfiguration('success', 'Device Saved');
    displayAlert();
    hideAlert();
  }
  return (
    <div className="modal fade w3-animate-zoom" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <ModalHeader title={title} />
          <div className="modal-body">
            <form id="form">
              {children}

              <div className="col">
              </div>
            </form>
          </div>
          {!update && <ModalFooter saveAction={saveAction} />}
          {update && <ModalFooter saveAction={saveAction} buttonName="Update" />}
        </div>
      </div>
    </div>
  );
}

export default Modal;
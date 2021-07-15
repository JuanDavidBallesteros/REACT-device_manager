import React from 'react';
import { alertConfiguration } from '../Alert';
import ModalHeader from './ModalHeader';
import Select from '../Select';
import './Modal.css';
import Input from '../Input';
import ModalFooter from './ModalFooter';


function Modal({ displayAlert, update = false }) {
  const saveAction = () => {
    alertConfiguration('success', 'Device Saved');
    displayAlert();
  }
  return (
    <div className="modal fade w3-animate-zoom" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <ModalHeader />
          <div className="modal-body">
            <form id="form">
              <div className="form-row">
                <Select
                  options={[
                    { value: 'Living room', tag: 'Living room' },
                    { value: 'Bed room', tag: 'Bed room' },
                    { value: 'Bathroom', tag: 'Bathroom' },
                    { value: 'Kitchen', tag: 'Kitchen' },
                  ]}
                  fielName="Zone"
                  className='form-control'
                />
              </div>
              <div className="form-row">
                <div className="col">
                  <Input
                    placeholder="Name"
                    className='form-control'
                  />
                </div>
                <div className="col">
                  <Input
                    placeholder="ID"
                    className='form-control'
                  />

                </div>
                <div className="col">
                  <Select
                    options={[
                      { value: 'Monitoring', tag: 'Monitoring' },
                      { value: 'Temperature', tag: 'Temperature' },
                      { value: 'Security', tag: 'Security' },
                      { value: 'Player', tag: 'Player' },
                      { value: 'Light', tag: 'Light' },
                    ]}
                    fielName="DeviceType"
                    className='form-control'
                  />
                </div>
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
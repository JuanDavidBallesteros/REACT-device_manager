import React from 'react';
import { alertConfiguration } from '../Alert';
import ModalHeader from './ModalHeader';
import Select from '../Select';
import './Modal.css';
import Input from '../Input';
import ModalFooter from './ModalFooter';


function Modal({ displayAlert, hideAlert, update = false, inputHandler, sendData, object = {}, callback }) {
  const test = () => {
    console.log(object);
  }
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
                  name='zone'
                  fieldName="Zone"
                  className='form-control'
                  onChange={inputHandler}
                  value={object.zone}
                />
              </div>
              <div className="form-row">
                <div className="col">
                  <Input
                    name='name'
                    placeholder="Name"
                    className='form-control'
                    onInput={() => { inputHandler(); callback(test); }}
                    value={object.name}
                  />
                </div>
                <div className="col">
                  <Input
                    name='id'
                    placeholder="ID"
                    className='form-control'
                    onInput={() => { inputHandler(); }}
                    value={object.id}
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
                    name='deviceType'
                    fieldName="DeviceType"
                    className='form-control'
                    onChange={inputHandler}
                    value={object.deviceType}
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
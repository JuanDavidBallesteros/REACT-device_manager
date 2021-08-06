import React from 'react';

function ModalHeader({ title }) {
  return (
    <div className="modal-header">
      <h5 className="modal-title" id="exampleModalLabel">Add new {title}</h5>
      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
}

export default ModalHeader;
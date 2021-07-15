import React from 'react';

function ModalFooter({ saveAction, buttonName = "Save" }) {
  return (
    <div className="modal-footer">
      <button type="button" className="btn btn-outline-secondary" data-dismiss="modal" id="cancelDevice">Close</button>
      <button type="button" className="btn btn-info" id="addDevice" data-dismiss="modal"
        onClick={saveAction}
      >{buttonName}</button>
    </div>
  );
}

export default ModalFooter;
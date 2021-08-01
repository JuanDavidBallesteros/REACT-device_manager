import React from 'react';
import classNames from 'classname';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faPencilAlt } from '@fortawesome/free-solid-svg-icons'

function ActionButton({ type, updateModal, onClick, index }) {

  return (
    <button
      type="button"
      className={classNames("btn", {
        'btn-primary': type === "edit",
        'btn-danger': type === "delete"
      })}
      onClick={(e) => {
        updateModal(index);
        onClick(e);
      }}
    >
      {type === "edit" && <FontAwesomeIcon icon={faPencilAlt} />}
      {type === "delete" && <FontAwesomeIcon icon={faTrashAlt} />}
    </button>
  );
}

export default ActionButton;

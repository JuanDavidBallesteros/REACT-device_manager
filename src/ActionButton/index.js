import React from 'react';
import classNames from 'classname';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faPencilAlt } from '@fortawesome/free-solid-svg-icons'

function ActionButton({ type, updateEntity, index, deEntity }) {
  const clickButton = (e, index) => {
    if (type === 'edit') {
      updateEntity(e, index);
    } else {
      deEntity(e, index);
    }
  }
  return (
    <button
      type="button"
      className={classNames("btn", {
        'btn-primary': type === "edit",
        'btn-danger': type === "delete"
      })}
      data-toggle={classNames({
        'modal': type === "edit",
        '': type === "delete"
      })}
      data-target={classNames({
        '#exampleModal': type === "edit",
        '': type === "delete"
      })}
      onClick={(e) => {
        clickButton(e, index);
      }}
    >
      {type === "edit" && <FontAwesomeIcon icon={faPencilAlt} />}
      {type === "delete" && <FontAwesomeIcon icon={faTrashAlt} />}
    </button>
  );
}

export default ActionButton;

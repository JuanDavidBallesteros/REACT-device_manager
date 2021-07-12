import React from 'react';
import "./Alert.css";


function Alert() {
  return (
    <div className="alert alert-success alert-dismissible" role="alert" id="alerts">
      Test
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label='close'
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
}

export default Alert;
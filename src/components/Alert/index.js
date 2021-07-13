import React from 'react';
import "./Alert.css";

let type = 'success';
let ms = 'Empty alert';

function info(alertType, msg) {
  type = alertType;
  ms = msg;
}

function Alert() {
  if (type === 'success') {
    return (
      <div className="alert alert-success alert-dismissible" role="alert" id="alerts">
        {ms}
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
  } else if (type === 'error') {
    return (
      <div className="alert alert-danger alert-dismissible" role="alert" id="alerts">
        {ms}
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

}

export { Alert as default, info as alertConfiguration };
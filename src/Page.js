import React, { useState } from 'react';
import Nav from './components/Nav';
import ActionsMenu from './components/ActionsMenu';
import Table from './components/Table';
//import Modal from './components/Modal';
import Alert, { alertConfiguration } from './components/Alert';

function Page() {
  const [showAlert, setShowAlert] = useState(false);
  const displayAlert = () => {
    setShowAlert(!showAlert);
  };
  return (
    <>

      {alertConfiguration('success', 'Full sueño')}
      {showAlert && <Alert />}
      <header>
        < Nav />
      </header>
      <main>
        <ActionsMenu displayAlert={displayAlert} />
        <Table />
      </main>



    </>
  )
}


export { Page as default };
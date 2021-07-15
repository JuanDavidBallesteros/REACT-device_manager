import React, { useState } from 'react';
import Nav from './components/Nav';
import ActionsMenu from './components/ActionsMenu';
import Table from './components/Table';
import Modal from './components/Modal';
import Alert from './components/Alert';

function Page() {
  const [showAlert, setShowAlert] = useState(false);
  const displayAlert = () => {
    setShowAlert(!showAlert);
  };
  const [showModal, setShowModal] = useState(false);
  const displayModal = () => {
    setShowModal(true);
  };

  return (
    <>
      {showAlert && <Alert />}
      <header>
        < Nav />
      </header>
      <main>
        <ActionsMenu displayModal={displayModal} />
        <Table />
      </main>
      {showModal && <Modal displayAlert={displayAlert} />}
    </>
  )
}


export default Page;
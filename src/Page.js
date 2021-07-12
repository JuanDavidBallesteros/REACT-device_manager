import React from 'react';
import Nav from './components/Nav';
import ActionsMenu from './components/ActionsMenu';
import Table from './components/Table';
//import Modal from './components/Modal';
import Alert from './components/Alert';

function Page() {
  return (
    <>
      <Alert />
      <header>
        < Nav />
      </header>
      <main>
        <ActionsMenu />
        <Table />
      </main>
    </>
  )
}

export default Page;
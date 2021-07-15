import React, { Component } from 'react';
import Nav from './components/Nav';
import ActionsMenu from './components/ActionsMenu';
import Table from './components/Table';
import Modal from './components/Modal';
import Alert from './components/Alert';

class Page extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showAlert: false,
      showModal: false,
    };
  };

  displayModal = () => {
    this.setState({ showModal: !this.state.showModal })
  };
  displayAlert = () => {
    this.setState({ showAlert: !this.state.showAlert })
  };
  //Render always is the last function
  render() {

    return (
      <>
        {this.state.showAlert && <Alert />}
        <header>
          < Nav />
        </header>
        <main>
          <ActionsMenu displayModal={this.displayModal} />
          <Table />
        </main>
        {this.state.showModal && <Modal displayAlert={this.displayAlert} />}
      </>
    )
  }
}


export default Page;
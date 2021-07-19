import React, { Component } from 'react';
import Nav from './components/Nav';
import ActionsMenu from './components/ActionsMenu';
import Table from './components/Table';
import Modal from './components/Modal';
import Alert from './components/Alert';
import { listEntity } from './Service';

class Page extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showAlert: false,
      showModal: false,
      entities: []
    };
  };

  displayModal = () => {
    this.setState({ showModal: !this.state.showModal })
  };
  displayAlert = () => {
    this.setState({ showAlert: !this.state.showAlert })
  };

  getEntity = async () => {
    const { entity } = this.props;
    const entities = await listEntity(entity);
    this.setState({ entities })
  };

  componentDidMount() { //Call the method before chage the virtual DOM
    this.getEntity();
  }

  //Render always is the last function
  render() {
    const { title } = this.props;
    return (
      <>
        {this.state.showAlert && <Alert />}
        <header>
          < Nav />
        </header>
        <main>
          <ActionsMenu displayModal={this.displayModal} title={title} entity='devices' />
          <Table entities={this.state.entities} />
        </main>
        {this.state.showModal && <Modal displayAlert={this.displayAlert} />}
      </>
    )
  }
}


export default Page;
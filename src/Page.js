import React, { Component } from 'react';
import Nav from './components/Nav';
import ActionsMenu from './components/ActionsMenu';
import Table from './components/Table';
import Modal from './components/Modal';
import Alert from './components/Alert';
import { listEntity, createEntity } from './Service';

class Page extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showAlert: false,
      showModal: false,
      isUpdate: false,
      entities: [],
      object: {},
    };
  };

  displayModal = () => {
    this.setState({ showModal: true })
    console.log(this.state.showModal)
  };
  saveModal = () => {
    this.setState({ isUpdate: false })
  };
  updateModal = (index) => {
    console.log(index);
    this.setState({ isUpdate: true });
    this.displayModal();
  };
  displayAlert = () => {
    this.setState({ showAlert: true })
  };
  hideAlert = () => {
    setTimeout(() => {
      this.setState({ showAlert: false })
    }, 3000);
  };

  getEntity = async () => {
    const { entity } = this.props;
    const entities = await listEntity(entity);
    this.setState({ entities })
  };

  componentDidMount() { //Call the method before change the virtual DOM
    this.getEntity();
  }

  inputHandler = (e) => {
    const {
      target: { value, id }
    } = e;
    let { object } = this.state;
    object = { ...object, [id]: value };
    this.setState({ object })
    console.log(object);
  }

  updateEntity = async (e) => {
    console.log({ e });
    /* const { entity } = this.props;
    let { object } = this.state;
    const method = 'PUT';
    await createEntity({ entity, object, method, idObject });
    this.getEntity(); */
  }

  createEntity = async () => {
    const { entity } = this.props;
    let { object } = this.state;
    const method = 'POST';
    await createEntity({ entity, object, method });
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
          <ActionsMenu displayModal={this.displayModal} saveModal={this.saveModal} title={title} entity='devices' />
          <Table entities={this.state.entities} updateModal={this.updateModal} updateEntity={this.updateEntity} />
        </main>
        {this.state.showModal &&
          <Modal
            displayAlert={this.displayAlert}
            hideAlert={this.hideAlert}
            inputHandler={this.inputHandler}
            sendData={this.createEntity}
            update={this.state.isUpdate}
          />
        }
      </>
    )
  }
}


export default Page;
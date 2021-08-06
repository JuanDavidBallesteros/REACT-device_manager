import React, { Component } from 'react';

import ActionsMenu from './components/ActionsMenu';
import Table from './components/Table';
import Modal from './components/Modal';
import Alert from './components/Alert';
import { listEntity, createEntity, getOne, deleteEntity } from './Service';

class Page extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showAlert: false,
      showModal: false,
      method: 'POST',
      entities: [],
      object: {},
      idObject: null,
    };
  };

  displayModal = (_e, method = 'POST') => {
    this.setState({ showModal: true, method });
  };
  displayAlert = () => {
    this.setState({ showAlert: true });
  };
  hideAlert = () => {
    setTimeout(() => {
      this.setState({ showAlert: false })
    }, 3000);
  };

  getEntity = async () => {
    const { entity } = this.props;
    const entities = await listEntity({ entity });
    this.setState({ entities });
  };

  componentDidMount() { //Call the method before change the virtual DOM

    this.getEntity();
    console.log(this.state)
  }

  inputHandler = (e) => {
    const {
      target: { value, id }
    } = e;
    let { object } = this.state;
    object = { ...object, [id]: value };
    this.setState({ object });
  }

  updateEntity = async (_e, index) => {
    const { entity } = this.props;
    let object = await getOne(entity, index);
    this.setState({ object, idObject: index }, () => {
      this.displayModal(null, 'PUT');
    })
  }

  deEntity = async (_e, index) => {
    const { entity } = this.props;
    await deleteEntity({ entity, idObject: index });
    this.getEntity(); /// NECESITO REFRESCAR NADA MÁS
  }

  createEntity = async () => {
    const { entity } = this.props;
    let { object, method, idObject } = this.state;
    await createEntity({ entity, object, method, idObject });
    this.getEntity(entity, object, idObject);
  }

  //Render always is the last function
  render() {
    const { title } = this.props;
    return (
      <>
        {this.state.showAlert && <Alert />}
        <main>
          <ActionsMenu displayModal={this.displayModal} title={title} entity={this.props.entity} />
          <Table entities={this.state.entities} updateEntity={this.updateEntity} deEntity={this.deEntity} />
        </main>

        <Modal
          displayAlert={this.displayAlert}
          hideAlert={this.hideAlert}
          inputHandler={this.inputHandler}
          sendData={this.createEntity}
          object={this.state.object}
          title={title}
        />
      </>
    )
  }
}


export default Page;
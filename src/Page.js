import React, { Component } from 'react';

import ActionsMenu from './components/ActionsMenu';
import Table from './components/Table';
import Modal from './components/Modal';
import Alert from './components/Alert';
import { listEntity, createEntity, getOne, deleteEntity } from './Service';
import Input from './components/Input';
import Select from './components/Select';

const FieldComponent = ({ column, index, action, object }) => {
  switch (column) {
    case 'zone':
    case 'deviceType':
    case 'size':
    case 'permission':
      return (
        <Select
          options={selectNames[column]}
          key={`Select-${index}`}
          name={column}
          fieldName={column.toUpperCase()}
          className='form-control'
          onChange={action}
          value={object[column]}
        />
      )
    default:
      return (
        <Input
          name={column}
          placeholder={column.toUpperCase()}
          className='form-control'
          onInput={action}
          value={object[column]}
        />
      )
  }
}


const selectNames = {
  'zone': (
    [
      { value: 'Living room', tag: 'Living room' },
      { value: 'Bed room', tag: 'Bed room' },
      { value: 'Bathroom', tag: 'Bathroom' },
      { value: 'Kitchen', tag: 'Kitchen' },
    ]
  ),
  'deviceType': (
    [
      { value: 'Monitoring', tag: 'Monitoring' },
      { value: 'Temperature', tag: 'Temperature' },
      { value: 'Security', tag: 'Security' },
      { value: 'Player', tag: 'Player' },
      { value: 'Light', tag: 'Light' },
    ]
  ),
  'size': (
    [
      { value: '0 to 5 mts', tag: '0 to 5 mts' },
      { value: '5 to 15 mts', tag: '5 to 15 mts' },
      { value: '15 to 30 mts', tag: '15 to 30 mts' },
      { value: '30 to 45 mts', tag: '30 to 45 mts' },
      { value: 'more 45 mts', tag: 'more 45 mts' },
    ]
  ),
  'permission': (
    [
      { value: 'Monitoring', tag: 'All' },
      { value: 'Temperature', tag: 'Edit' },
      { value: 'Security', tag: 'View' },
      { value: 'Player', tag: 'Restricted' },
    ]
  )
}

class Page extends Component {

  constructor(props) {
    super(props);
    this.state = {
      columns: [],
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
    let columns = [];
    if (Array.isArray(entities) && entities.length > 0) {
      columns = Object.keys(entities[0]) || [];
    }
    this.setState({ entities, columns });
  };

  componentDidMount() { //Call the method before change the virtual DOM
    this.getEntity();
    //console.log(this.state)
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
    const { columns } = this.state;
    //console.log(FieldComponent['size'])
    return (
      <>
        {this.state.showAlert && <Alert />}
        <main>
          <ActionsMenu displayModal={this.displayModal} title={title} entity={this.props.entity} />
          <Table entities={this.state.entities} updateEntity={this.updateEntity} deEntity={this.deEntity} columns={columns} />
        </main>

        <Modal
          displayAlert={this.displayAlert}
          hideAlert={this.hideAlert}
          inputHandler={this.inputHandler}
          sendData={this.createEntity}
          object={this.state.object}
          title={title}
        >
          {columns.map((column, index) =>
          (
            <div className="form-row">
              < FieldComponent
                key={`form-field-${index}`}
                column={column}
                index={index}
                action={this.inputHandler}
                object={this.state.object}
              />
            </div>
          )
          )}
        </Modal>
      </>
    )
  }
}


export default Page;
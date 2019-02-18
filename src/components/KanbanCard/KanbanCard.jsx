import React, { Component } from 'react';
import Modal from 'react-modal';
import EditForm from '../../containers/EditForm/EditForm';

Modal.setAppElement('#root')

class KanbanCard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      moldalisOpen: false,
      title: this.props.title,
      body: this.props.body,
      priorityName: this.props.priorityName,
      statusName: this.props.statusName,
      createdBy: this.props.created_byFirstName,
      assignedBy: this.props.assigned_byFirstName

    }

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {

    this.setState({
      modalIsOpen: true,
      title: this.props.title,
      body: this.props.body,
      priorityName: this.props.priorityName,
      statusName: this.props.statusName,
      createdBy: this.props.created_byFirstName,
      assignedBy: this.props.assigned_byFirstName
    });
  }

  afterOpenModal() {

  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    const { key, title, priorityName, statusName, created_byFirstName, assigned_byFirstName } = this.props;
    console.log(this.props)
    return (
      <div className='cardContainer'>
        <h3 className={title}>{title}</h3>
        <p className={priorityName}>Priority: {priorityName}</p>
        <p className={created_byFirstName}>{created_byFirstName}</p>
        <button className='editButton' onClick={this.openModal} >Edit</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Edit Modal"
        >
          <EditForm
            title={this.state.title}
            body={this.state.body}
            priorityName={this.state.priorityName}
            statusName={this.state.statusName}
            createdBy={this.state.createdBy}
            assignedBy={this.state.assignedBy}
          />
        </Modal>
        <button className='deleteButton'>Delete</button>
        <p className={assigned_byFirstName}>Assigned By:{assigned_byFirstName}</p>
      </div >
    )
  }
}


export default KanbanCard;
import React, { Component } from 'react';
import Modal from 'react-modal';
import './KanbanTitle.css';
import NewTaskForm from '../NewTaskForm/NewTaskForm';
// import NewTaskForm from '../NewTaskForm/NewTaskForm';
Modal.setAppElement('#root')

class KanbanTitle extends Component {
  constructor(props) {
    super(props)

    this.state = {
      moldalisOpen: false
    }

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }


  render() {
    const { title } = this.props;
    return (
      <div className="header">
        <div className="title">
          {title}
        </div>
        <div className="newTask">
          <button className="newTaskButton" onClick={this.openModal}>+ New Task</button>
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            contentLabel="Example Modal"
          >

            <NewTaskForm />
          </Modal>
        </div>
      </div>
    )
  }
}

export default KanbanTitle;
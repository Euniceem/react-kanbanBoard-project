import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import EditForm from '../../containers/EditForm/EditForm';
import { deleteCard } from '../../actions';
import './KanbanCard.scss';

Modal.setAppElement('#root')

class KanbanCard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      moldalisOpen: false,
      id: this.props.id,
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
      id: this.props.id,
      title: this.props.title,
      body: this.props.body,
      priorityName: this.props.priorityName,
      statusName: this.props.statusName,
      createdBy: this.props.created_byFirstName,
      assignedBy: this.props.assigned_byFirstName
    });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    const { title, priorityName, statusName, created_byFirstName, assigned_byFirstName } = this.props;

    return (
      <div className='cardContainer' id='cardContainer'>
        <div className={statusName}>
          <div className="title">{title}</div>
          <div className={priorityName}>Priority: {priorityName}</div>
          <div className={assigned_byFirstName}>Assigned By:{assigned_byFirstName}</div>
          <button className='editButton' onClick={this.openModal}>Edit</button>
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            contentLabel="Edit Modal"
          >
            <EditForm
              id={this.state.id}
              title={this.state.title}
              body={this.state.body}
              priorityName={this.state.priorityName}
              statusName={this.state.statusName}
              createdBy={this.state.createdBy}
              assignedBy={this.state.assignedBy}
            />
          </Modal>
          <button className='deleteButton' onClick={() =>
            this.props.deleteCard(this.props.id)
          }>Delete</button>
          <div className="createdBy">{created_byFirstName}</div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    card: state
  }
};

const mapDispatchToProps = dispatch => {
  return {
    deleteCard: card => {
      dispatch(deleteCard(card));
    }
  };
};

KanbanCard = connect(
  mapStateToProps,
  mapDispatchToProps
)(KanbanCard);

export default KanbanCard;
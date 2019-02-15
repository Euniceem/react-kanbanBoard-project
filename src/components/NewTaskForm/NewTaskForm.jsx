import React, { Component } from 'react';


class NewTaskForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      titleInput: '',
      bodyInput: '',
      priorityInput: '',
      createdByInput: '',
      assignedToInput: ''
    };

    this.addNewCard = this.addNewCard.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    const value = e.target.value;
    switch (e.target.id) {
      case 'title':
        this.setState({ titleInput: value });
        break;
      case 'body':
        this.setState({ bodyInput: value });
        break;
      case 'priority_id':
        this.setState({ priorityInput: value });
        break;
      case 'status_id':
        this.setState({ statusInput: value });
        break;
      case 'created_by':
        this.setState({ created_byInput: value });
        break;
      case 'assigned_to':
        this.setState({ assigned_toInput: event.target.value });
        break;
      default:
        break;
    }
  }

  addNewCard(e) {
    const cards = {};
    cards.title = this.state.titleInput;
    cards.body = this.state.bodyInput;
    cards.created_by = parseInt(this.state.created_byInput);
    cards.assigned_to = parseInt(this.state.assigned_toInput);
    cards.priority_id = parseInt(this.state.priorityInput);
    switch (this.state.statusInput) {
      case 'QUEUE':
        cards.status_id = 1;
        break;
      case 'In Progress':
        cards.status_id = 2;
        break;
      case 'Done':
        cards.status_id = 3;
        break;
      default:
    }

    this.props.addCard(cards);
    this.setState({
      titleInput: '',
      bodyInput: '',
      priorityInput: '',
      statusInput: '',
      created_byInput: '',
      assigned_toInput: ''
    });
  }


  render() {
    const input = this.state;

    return (
      <div id="NewCardForm-container">

      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    cards: state.NewTaskForm
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addCard: card => {
      dispatch(addCard(card));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewTaskForm);

export default NewTaskForm;
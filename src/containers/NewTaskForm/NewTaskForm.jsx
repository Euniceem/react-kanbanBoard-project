import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCard } from '../../actions';

class NewTaskForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      titleInput: '',
      bodyInput: '',
      priorityInput: 1,
      statusInput: 1,
      createdByInput: 1,
      assignedToInput: 1
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {

    return this.props;
  }

  handleInputChange(e) {
    const value = e.target.value;

    switch (e.target.name) {
      case 'title':
        this.setState({ titleInput: value });
        break;
      case 'body':
        this.setState({ bodyInput: value });
        break;
      case 'priority':
        this.setState({ priorityInput: value });
        break;
      case 'status':
        this.setState({ statusInput: value });
        break;
      case 'created_by':
        this.setState({ createdByInput: value });
        break;
      case 'assigned_to':
        this.setState({ assignedToInput: e.target.value });
        break;
      default:
        break;
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    const card = {};
    card.title = this.state.titleInput;
    card.body = this.state.bodyInput;
    card.created_by = this.state.createdByInput;
    card.assigned_to = this.state.assignedToInput;
    card.priority_id = this.state.priorityInput;
    card.status_id = 1;


    this.props.addCard(card);
    this.setState({
      titleInput: '',
      bodyInput: '',
      priorityInput: '',
      statusInput: '',
      createdByInput: '',
      assignedToInput: ''
    });
  }

  render() {

    return (
      <div id="NewCardFormContainer">
        <form>
          <label type="text" value={this.state.titleInput} onChange={this.handleInputChange}>
            Title:
          <br></br>
            <input name='title' type="text" value={this.state.titleInput} onChange={this.handleInputChange} />
          </label>
          <br></br>
          <label name='title' type="text" value={this.state.bodyInput} onChange={this.handleInputChange}>
            Body:
          <br></br>
            <input name='body' type="text" value={this.state.bodyInput} onChange={this.handleInputChange} />
          </label>
          <br></br>
          <label name='priority' value={this.state.priorityInput} onChange={this.handleInputChange}>
            <label name='priority' value={this.state.priorityInput} onChange={this.handleInputChange}>
              <input type="radio" name="priority" value={1} />High
            <input type="radio" name="priority" value={2} />Medium
            <input type="radio" name="priority" value={3} />Low<br></br>
            </label>
          </label>
          <br></br>
          <label name='created_by' value={this.state.createdByInput} onChange={this.handleInputChange}>
            Created By:
            <br></br>
            <input name='created_by' type="text" value={this.state.createdByInput} onChange={this.handleInputChange} />
          </label>
          <br></br>
          <label name='assigned_to' value={this.state.assignedToInput} onChange={this.handleInputChange}>
            Assigned From:
            <br></br>
            <input name='assigned_to' type="text" value={this.state.assignedToInput} onChange={this.handleInputChange} />
          </label>
          <br></br>
          <button className='submitButton' onClick={this.handleSubmit} >Submit</button>
        </form>
      </div >
    );
  }
}


const mapStateToProps = state => {
  return {
    card: state.cardReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addCard: card => {
      dispatch(addCard(card));
    }
  };
};

NewTaskForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewTaskForm);

export default NewTaskForm;
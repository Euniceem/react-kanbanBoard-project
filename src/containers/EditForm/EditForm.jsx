import React, { Component } from 'react';
import { connect } from 'react-redux';

class EditForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      titleInput: '',
      bodyInput: '',
      priorityInput: 1,
      statusInput: 1,
      createdByInput: 1,
      assignedToInput: 1
    };

    this.handleInputChange = this.handleInputChange.bind(this);
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


  render() {

  }
}

export default EditForm;
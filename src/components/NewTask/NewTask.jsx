import React, { Component } from 'react';
import KanbanCard from '../KanbanCard/KanbanCard';
import KanbanTitle from '../KanbanTitle/KanbanTitle';

class NewTask extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(e) {
    const value = e.target.value;
    this.setState({ input: value });
  }

  render() {
    const input = this.state.input;

  }
}

export default NewTask;
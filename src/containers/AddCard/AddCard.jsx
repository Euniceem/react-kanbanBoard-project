import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';
import { addBookAsync } from '../../actions';

class AddCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      priority_id: '',
      status_id: '',
      created_by: '',
      assigned_to: ''
    };

    this.titleInputRef = createRef();
  }
}


const mapStateToProps = (state => {
  return {};
});

const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: (book) => {
      dispatch(addBookAsync(book))
    }
  }
}

AddCard = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCard);
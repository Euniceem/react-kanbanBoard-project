import React, { Component } from 'react';
import './App.css';
import KanbanTitle from './components/KanbanTitle';
import KanbanBoard from './components/KanbanBoard';
import { connect } from 'react-redux';
import { loadCards } from '../src/actions'

class App extends Component {
  constructor(props) {
    super(props);
    console.log('APP', this.props)

    this.state = {
      pageTitle: 'Kanban'
    };
  };

  componentDidMount() {
    return this.props.loadCards();
  }

  render() {
    console.log('APP', this.props)
    return (
      <div className="App">
        <KanbanTitle title={this.state.pageTitle} />

        <KanbanBoard cards={this.props.cards} />


      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadCards: () => {
      return dispatch(loadCards())
    }
  }
}

App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default App;

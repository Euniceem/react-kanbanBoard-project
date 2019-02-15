import React, { Component } from 'react';
import './App.css';
import KanbanTitle from './components/KanbanTitle';
import KanbanBoard from './components/KanbanBoard';
import { connect } from 'react-redux';
import { loadCards } from '../src/actions'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageTitle: 'Kanban'
    };
  };

  componentDidMount() {
    console.log(this.props)
    return this.props.loadCards();
  }

  render() {

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

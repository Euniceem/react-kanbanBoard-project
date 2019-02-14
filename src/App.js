import React, { Component } from 'react';
import './App.css';
import KanbanTitle from './components/KanbanTitle';
import KanbanBoard from './components/KanbanBoard';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageTitle: 'Kanban'
    };

    this.cards = [
      {
        title: 'demo',
        status: 'In-Queue',
        priorityName: 'High',
        created_byFirstName: 'Eunice',
        created_byLastName: 'Min',
        assigned_byFirstName: 'Eunice',
        assigned_byLastName: 'Min'
      },
      {
        title: ' second demo',
        status: 'In-Progress',
        priorityName: 'Medium',
        created_byFirstName: 'Eunice',
        created_byLastName: 'Min',
        assigned_byFirstName: 'Eunice',
        assigned_byLastName: 'Min'
      },
      {
        title: 'third demo',
        status: 'Done',
        priorityName: 'Low',
        created_byFirstName: 'Eunice',
        created_byLastName: 'Min',
        assigned_byFirstName: 'Eunice',
        assigned_byLastName: 'Min'
      }
    ]
  };


  render() {

    return (
      <div className="App">
        <KanbanTitle title={this.state.pageTitle} />

        <KanbanBoard cards={this.cards} />

      </div>
    );
  }
}

export default App;

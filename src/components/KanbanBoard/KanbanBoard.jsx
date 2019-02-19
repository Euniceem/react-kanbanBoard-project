import React, { Component } from 'react';
import KanbanColumn from '../KanbanColumn/KanbanColumn';
import './KanbanBoard.scss';

class KanbanBoard extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const cards = this.props.cards;

    return (
      <div id="column">
        <div className='inQueue'>
          <h1 className="statusTitle">In Queue</h1>
          <KanbanColumn cards={cards} status="In-Queue" />
        </div>
        <div className='inProgress'>
          <h1 className="statusTitle">In Progress</h1>
          <KanbanColumn cards={cards} status="In-Progress" />
        </div>
        <div className='done'>
          <h1 className="statusTitle">Done</h1>
          <KanbanColumn cards={cards} status="Done" />
        </div>
      </div>
    );
  }
}

export default KanbanBoard
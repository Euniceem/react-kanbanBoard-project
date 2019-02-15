import React, { Component } from 'react';
import KanbanColumn from '../KanbanColumn/KanbanColumn';

class KanbanBoard extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const cards = this.props.cards;

    return (
      <div id="column">
        <div className='inQueue'>In-Queue
          <KanbanColumn cards={cards} status="In-Queue" />
        </div>
        <div className='inProgress'>In-Progress
          <KanbanColumn cards={cards} status="In-Progress" />
        </div>
        <div className='done'>Done
          <KanbanColumn cards={cards} status="Done" />
        </div>
      </div>
    );
  }
}




export default KanbanBoard;
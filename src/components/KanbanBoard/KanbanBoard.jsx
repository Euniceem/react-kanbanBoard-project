import React, { Component } from 'react';
import KanbanColumn from '../KanbanColumn/KanbanColumn';

class KanbanBoard extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const cards = this.props.cards;


    const inQueue = cards.filter((card) => {
      return card.status.name === 'In-Queue';
    })

    const inProgress = cards.filter((card) => {
      return card.status.name === 'In-Progress';
    })

    const done = cards.filter((card) => {
      return card.status.name === 'Done';
    })


    return (
      <div id="column">
        <div className='inQueue'>In-Queue
          <KanbanColumn cards={inQueue} status="In-Queue" />
        </div>
        <div className='inProgress'>In-Progress
          <KanbanColumn cards={inProgress} status="In-Progress" />
        </div>
        <div className='done'>Done
          <KanbanColumn cards={done} status="Done" />
        </div>
      </div>
    );
  }
}




export default KanbanBoard;
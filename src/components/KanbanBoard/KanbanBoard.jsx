import React, { Component } from 'react';
import KanbanColumn from '../KanbanColumn/KanbanColumn';

class KanbanBoard extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const data = this.props.data;

    const inQueue = data.filter((card) => {
      return card.status === 'In-Queue';
    })

    const inProgress = data.filter((card) => {
      return card.status === 'In-Progress';
    })

    const done = data.filter((card) => {
      return card.status === 'Done';
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
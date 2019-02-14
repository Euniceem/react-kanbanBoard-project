import React, { Component } from 'react';
import KanbanColumn from '../KanbanColumn/KanbanColumn';

class KanbanBoard extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const data = this.props.data;

    const filterColumn = data.filter((card) => {

      return card.status;
    })


    return (
      <div id="column">
        <div className='inQueue'>In-Queue
          <KanbanColumn cards={filterColumn} status="In-Queue" />
        </div>
        <div className='inProgress'>In-Progress
          <KanbanColumn cards={filterColumn} status="In-Progress" />
        </div>
        <div className='done'>Done
          <KanbanColumn cards={filterColumn} status="Done" />
        </div>
      </div>
    );
  }
}




export default KanbanBoard;
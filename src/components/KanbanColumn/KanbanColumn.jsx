import React, { Component } from 'react';
import KanbanCard from '../KanbanCard/KanbanCard';


class KanbanColumn extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const cardList = this.props.cards;

    const inQueue = cardList.filter((card) => {
      return card.status.includes('In-Queue')
    })
      .map((card, key) => {
        return (
          <KanbanCard key={key}
            title={card.title}
            priorityName={card.priorityName}
            created_byFirstName={card.created_byFirstName}
            assigned_byFirstName={card.assigned_byFirstName} />
        )
      })



    const inProgress = cardList.filter((card) => {
      return card.status.includes('In-Progress')
    })
      .map((card, key) => {
        return (
          <KanbanCard key={key}
            title={card.title}
            priorityName={card.priorityName}
            created_byFirstName={card.created_byFirstName}
            assigned_byFirstName={card.assigned_byFirstName} />
        )
      })

    const done = cardList.filter((card) => {
      return card.status.includes('Done')
    })
      .map((card, key) => {
        return (
          <KanbanCard key={key}
            title={card.title}
            priorityName={card.priorityName}
            created_byFirstName={card.created_byFirstName}
            assigned_byFirstName={card.assigned_byFirstName} />
        )
      })
    return (
      <div className='columnContainer'>
        <div className='inQueue'>
          {inQueue}
        </div>
        <div className='inProgress'>
          {inProgress}
        </div>
        <div className='Done'>
          {done}
        </div>
      </div>
    )
  }
}


export default KanbanColumn;
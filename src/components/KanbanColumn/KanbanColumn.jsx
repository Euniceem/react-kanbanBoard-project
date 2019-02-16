import React, { Component } from 'react';
import KanbanCard from '../KanbanCard/KanbanCard';

class KanbanColumn extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const columnStatus = this.props.status;
    const cards = this.props.cards
      .filter(card => {
        return card.status.name === columnStatus;
      })
      .map((card, key) => {
        return (
          <KanbanCard key={key}
            title={card.title}
            priorityName={card.priority.name}
            created_byFirstName={card.created.firstname}
            assigned_byFirstName={card.assigned.firstname} />
        )
      })

    return (
      <div className='columnContainer' >
        {columnStatus}
        {cards}
      </div>
    )
  }
}

export default KanbanColumn;
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
            id={card.id}
            title={card.title}
            body={card.body}
            priority_id={card.priority_id}
            priorityName={card.priority.name}
            status_id={card.status_id}
            statusName={card.status.name}
            created_by={card.created_by}
            created_byFirstName={card.created.firstname}
            assigned_to={card.assigned_to}
            assigned_byFirstName={card.assigned.firstname} />
        )
      })

    return (
      <div className='columnContainer' >
        {cards}
      </div>
    )
  }
}

export default KanbanColumn;
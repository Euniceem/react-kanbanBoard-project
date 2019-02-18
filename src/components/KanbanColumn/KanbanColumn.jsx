import React, { Component } from 'react';
import KanbanCard from '../KanbanCard/KanbanCard';

class KanbanColumn extends Component {
  constructor(props) {
    super(props);
    console.log('COlUMN CARDS', this.props)
  }

  render() {
    const columnStatus = this.props.status;
    const cards = this.props.cards
    console.log(cards)

      .filter(card => {
        return card.status.name === columnStatus;
      })
      .map((card, key) => {
        return (
          <KanbanCard key={key}
            id={card.id}
            title={card.title}
            body={card.body}
            priority={card.priority}
            priority_id={card.priority_id}
            status={card.status}
            status_id={card.status_id}
            createdBy_id={card.created_by}
            created_by={card.created}
            assignedBy_id={card.assigned_to}
            assigned_byFirstName={card.assigned} />
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
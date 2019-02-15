import React, { Component } from 'react';
import KanbanCard from '../KanbanCard/KanbanCard';

class KanbanColumn extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const cardList = this.props.cards;
    const cardStatus = this.props.status;
    // console.log('cardList', cardList)
    console.log(this.props.status)

    const columnFilter = cardList.filter((card) => {
      console.log('>>>>', card.status)
      return card.status
    })

    const inQueue = columnFilter.map((card, key) => {
      if (card.status.name === 'In-Queue') {

        return (
          <KanbanCard key={key}
            title={card.title}
            priorityName={card.priority.name}
            created_byFirstName={card.created.firstname}
            assigned_byFirstName={card.assigned.firstname} />
        )
      }
    })

    // const inQueue = cardList.filter((card) => {
    // //   return card.status.name === 'In-Queue';
    // })
    //   .map((card, key) => {
    //    
    //   })

    const inProgress = cardList.filter((card) => {
      return card.status.name === 'In-Progress';
    })
      .map((card, key) => {
        return (
          < KanbanCard key={key}
            title={card.title}
            priorityName={card.priority.name}
            created_byFirstName={card.created.firstname}
            assigned_byFirstName={card.assigned.firstname} />
        )
      })

    const done = cardList.filter((card) => {
      return card.status.name === 'Done'
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
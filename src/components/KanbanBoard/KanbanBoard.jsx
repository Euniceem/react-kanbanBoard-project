import React from 'react';
import KanbanColumn from '../KanbanColumn/KanbanColumn';
// import KanbanCard from './KanbanCard';


const KanbanBoard = (props) => {

  const { data } = props;
  const inQueue = data.filter((card) => {
    if (card.status === 'In-Queue') {
      console.log(card)
      return card;
    };
  })
  const inProgress = data.filter((card) => {
    return card.status === 'In-Progress';
  })
  const done = data.filter((card) => {
    return card.status === 'Done'
  })
  // console.log(inQueue)

  return (
    <div id="column">
      <div className='inQueue'>
        <KanbanColumn cards={inQueue} status="In Queue" />
      </div>
      <div className='inProgress'>
        <KanbanColumn cards={inProgress} status="In-Progress" />
      </div>
      <div className='done'>
        <KanbanColumn cards={done} status="Done" />
      </div>
    </div>
  );
};

export default KanbanBoard;
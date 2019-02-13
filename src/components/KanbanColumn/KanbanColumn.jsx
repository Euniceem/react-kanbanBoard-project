import React from 'react';
import KanbanCard from '../KanbanCard/KanbanCard';

const KanbanColumn = (...props) => {



  return (
    <div className='columnContainer'>
      <div className='inQueue'> In-Queue
          <KanbanCard status='in_Queue' />
      </div>
      <div className='inProgress'> In-Progress
          <KanbanCard status='in_Progress' />
      </div>
      <div className='Done'> Done
          <KanbanCard status='Done' />
      </div>
    </div>
  )


}

export default KanbanColumn;
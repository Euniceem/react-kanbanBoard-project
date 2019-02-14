import React from 'react';
import './KanbanTitle.css';

const KanbanTitle = (props) => {
  const { title } = props;
  return (
    <div className="header">
      <div className="title">
        {title}
      </div>
      <div className="newTask">
        <button className="newTaskButton">+ New Task</button>
      </div>
    </div>
  )
};

export default KanbanTitle;
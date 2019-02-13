import React from 'react';
import './KanbanTitle.css';

const KanbanTitle = (props) => {
  const { title } = props;
  return (
    <div className="header">
      {title}
    </div>
  )
};

export default KanbanTitle;
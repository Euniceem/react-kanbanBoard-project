import React from 'react';

const KanbanCard = (props) => {
  const { title, priorityName, created_byFirstName, assigned_byFirstName } = props;

  return (
    <div className='cardContainer'>
      <h3 className={title}>{title}</h3>
      <p className={priorityName}>Priority: {priorityName}</p>
      <p className={created_byFirstName}>{created_byFirstName}</p>
      <button className='editButton'>Edit</button>
      <button className='deleteButton'>Delete</button>
      <p className={assigned_byFirstName}>Assigned By:{assigned_byFirstName}</p>
    </div>
  )
};

export default KanbanCard;
import React from 'react';

const KanbanCard = (props) => {
  const { title, priorityName, created_byFirstName, assigned_byFirstName } = props;
  // console.log(props);

  return (
    <div className='cardContainer'>
      <h1 className={title}>{title}</h1>
      <p className={priorityName}>{priorityName}</p>
      <p className={created_byFirstName}>{created_byFirstName}</p>
      <button className='editButton'>Edit</button>
      <button className='deleteButton'>Delete</button>
      <p className={assigned_byFirstName}>{assigned_byFirstName}</p>
    </div>
  )
};

export default KanbanCard;
import React from 'react';

const AddCardButton = (props) => {
  return (
    <button className='addButton' onClick={props.clickHandler}>Add</button>
  )
}

export default AddCardButton;
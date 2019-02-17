import React from 'react';

const Users = (props) => {
  const { id, firstname, selected } = props;
  console.log(props)
  if (selected) {
    return (
      <option value={id} selected='selected'>{firstname}</option>
    )
  } else {
    return (
      <option value={id}>{firstname}</option>
    )
  }
}
export default Users;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Users from '../../components/Users/Users';
import { loadUsers } from '../../actions';


class UserList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      users: []
    }
  }

  componentWillMount() {
    return this.props.loadUsers();
  }

  render() {
    const users = this.props;
    console.log(users)
    users.map(user => {
      if (user.id === parseInt(this.props.selected)) {
        return (
          <Users key={user.id}
            id={user.id}
            firstname={user.firstname}
            selected={true} />
        );
      } else {
        return (
          <Users key={user.id}
            id={user.id}
            firstname={user.firstname}
            selected={false} />
        );
      }
    })
    return (
      <>
        {UserList}
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    loadUsers: () => {
      return dispatch(loadUsers());
    }
  };
};

UserList = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);

export default UserList;
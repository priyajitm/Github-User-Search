import React from 'react';
import UserItem from './UserItem';
import Spinner from '../Spinner';
import PropTypes from 'prop-types';

const Users = ({ users, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

Users.prototype = {
  Users: PropTypes.array.isRequired,
  Loading: PropTypes.array.isRequired
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridGap: '1rem'
};

export default Users;

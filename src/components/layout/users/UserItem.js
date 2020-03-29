import React from 'react';
import PropTypes from 'prop-types';

const UserItem = props => {
  const { avatar_url, html_url, login } = props.user;
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt=""
        className="round-img"
        style={{ width: '60px' }}
      />
      <h3>{login}</h3>
      <a className="btn btn-dark btn-sm my-1" href={html_url}>
        More
      </a>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;

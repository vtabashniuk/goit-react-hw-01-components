import React from 'react';
import PropTypes from 'prop-types';
import defaultAvatar from '../defaultImage.png';

const FriendListItem = ({ avatar, name, isOnline, styles }) => (
  <>
    <span
      className={styles.status}
      style={{ backgroundColor: isOnline ? '#4EB439' : '#B42034' }}
    ></span>
    <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
    <p
      className={styles.name}
      style={{ color: isOnline ? '#000000' : '#d0d0d0' }}
    >
      {name}
    </p>
  </>
);

FriendListItem.defaultProps = {
  avatar: defaultAvatar,
};

FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default FriendListItem;

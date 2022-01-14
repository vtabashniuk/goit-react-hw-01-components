import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import styles from './FriendList.module.css';

const defaultTitle3 = '';

const FriendList = ({ title, props }) => (
  <div className={styles.friendList}>
    <h2 className="title">{title}</h2>
    <ul>
      {props.map(({ avatar, name, isOnline, id }) => (
        <li className={styles.item} key={id}>
          <FriendListItem
            avatar={avatar}
            name={name}
            isOnline={isOnline}
            styles={styles}
          />
        </li>
      ))}
    </ul>
  </div>
);

FriendList.propTypes = {
  title: PropTypes.string.isRequired,
  props: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired }))
    .isRequired,
};

FriendList.defaultProps = {
  title: defaultTitle3,
};

export default FriendList;

import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../defaultImage.png';
import styles from './Profile.module.css';

const defaultTitle1 = '';
const defaultFollowers = 0;
const defaultViews = 0;
const defaultLikes = 0;

const Profile = ({
  title,
  userName,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) => (
  <div className={styles.profile}>
    <h2 className="title">{title}</h2>
    <div className={styles.description}>
      <img src={avatar} alt="User avatar" className={styles.avatar} />
      <p className={styles.name}>{userName}</p>
      <p className={styles.tag}>@{tag}</p>
      <p className={styles.location}>{location}</p>
    </div>

    <ul className={styles.stats}>
      <li className={styles.stats_item}>
        <span className={styles.label}>Followers</span>
        <span className={styles.quantity}>{followers}</span>
      </li>
      <li className={styles.stats_item}>
        <span className={styles.label}>Views</span>
        <span className={styles.quantity}>{views}</span>
      </li>
      <li className={styles.stats_item}>
        <span className={styles.label}>Likes</span>
        <span className={styles.quantity}>{likes}</span>
      </li>
    </ul>
  </div>
);

Profile.defaultProps = {
  title: defaultTitle1,
  avatar: defaultImage,
  followers: defaultFollowers,
  views: defaultViews,
  likes: defaultLikes,
};

Profile.propTypes = {
  title: PropTypes.string,
  userName: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};

export default Profile;

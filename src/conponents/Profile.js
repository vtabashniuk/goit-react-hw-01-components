import React from "react";
import PropTypes from "prop-types";
import defaultImage from "./defaultImage.png";

// const defaultStats = { followers: 0, views: 0, likes: 0 }
const defaultFollowers = 0;
const defaultViews = 0;
const defaultLikes = 0;
console.log(defaultImage);

const Profile = ({
  userName,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) => (
  <div class="profile">
    <div class="description">
      <img src={avatar} alt="User avatar" class="avatar" />
      <p class="name">{userName}</p>
      <p class="tag">@{tag}</p>
      <p class="location">{location}</p>
    </div>

    <ul class="stats">
      <li>
        <span class="label">Followers</span>
        <span class="quantity">{followers}</span>
      </li>
      <li>
        <span class="label">Views</span>
        <span class="quantity">{views}</span>
      </li>
      <li>
        <span class="label">Likes</span>
        <span class="quantity">{likes}</span>
      </li>
    </ul>
  </div>
);

Profile.defaultProps = {
  avatar: defaultImage,
  followers: defaultFollowers,
  views: defaultViews,
  likes: defaultLikes,
};

Profile.propTypes = {
  userName: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};

export default Profile;

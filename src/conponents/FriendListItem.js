import React from "react";
import PropTypes from "prop-types";
import defaultAvatar from "./defaultImage.png";

const FriendListItem = ({ avatar, name, isOnline }) => (
  <>
    <span class="status">
      {isOnline ? "ONLINE >>>>" : "OFFLINE XXXX"}
    </span>
    <img class="avatar" src={avatar} alt="User avatar" width="48" />
    <p class="name">{name}</p>
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

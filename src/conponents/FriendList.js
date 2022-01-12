import React from "react";
import PropTypes from "prop-types";
import FriendListItem from "./FriendListItem";

const defaultTitle3 = "";

const FriendList = ({ title, props }) => (
  <div class="friendList">
    <h2>{title}</h2>
    <ul class="friend-list">
      {props.map(({ avatar, name, isOnline, id }) => (
        <li class="item" key={id}>
              <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
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

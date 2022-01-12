import React from "react";
import Profile from "./conponents/Profile";
import Statistics from "./conponents/Statistics";
import FriendList from "./conponents/FriendList";

import userData from "./user.json";
import statData from "./data.json";
import friends from "./friends.json";

const title1 = "Task 1. Profile";
const title2 = "Task 2. Upload stats";
const title3 = "Task 3. Friend list"

const App = () => (
  <div>
    <h1>Homework 1</h1>
    <Profile
      title={title1}
      userName={userData.username}
      tag={userData.tag}
      location={userData.location}
      avatar={userData.avatar}
      followers={userData.stats.followers}
      views={userData.stats.views}
      likes={userData.stats.likes}
    />

    <Statistics title={title2} props={statData} />

    <FriendList title={title3} props={friends} />
  </div>
);

export default App;

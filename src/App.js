import React from "react";
import Profile from "./conponents/Profile";
import userData from "./user.json";

const App = () => (
  <div>
    <h1>Homework 1</h1>
    <Profile
      title={"Task 1"}
      userName={userData.username}
      tag={userData.tag}
      location={userData.location}
      avatar={userData.avatar}
      followers={userData.stats.followers}
      views={userData.stats.views}
      likes={userData.stats.likes}
    />
  </div>
);

export default App;

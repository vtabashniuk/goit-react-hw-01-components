import React from "react";
import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import FriendList from "./FriendsList/FriendList";
import TransactionHistory from "./TransactionHistory/TransactionHistory";

import userData from "../data/user.json";
import statData from "../data/data.json";
import { friends, transactions } from "../modifyDataValues";

const title1 = "Task 1. Profile";
const title2 = "Task 2. Upload stats";
const title3 = "Task 3. Friend list";
const title4 = "Task 4. Transactions history";

const App = () => (
  <>
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

    <TransactionHistory title={title4} props={transactions} />
  </>
);

export default App;

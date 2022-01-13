import friends from "./data/friends.json";
import transactions from "./data/transactions.json";

friends.forEach((element) => {
  element.id = String(element.id);
});

transactions.forEach((element) => {
  element.amount = Number(element.amount);
});

export { friends, transactions };
import React from "react";
import PropTypes from "prop-types";
import Transaction from "./Transaction";

const defaultTitle4 = "";

const TransactionHistory = ({ title, props }) => (
  <div>
    <h2>{title}</h2>
    <table class="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {props.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <Transaction type={type} amount={amount} currency={currency} />
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

TransactionHistory.propTypes = {
  title: PropTypes.string,
  props: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired }))
    .isRequired,
};

TransactionHistory.defaultProps = {
  title: defaultTitle4,
};

export default TransactionHistory;

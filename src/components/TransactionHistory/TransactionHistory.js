import React from 'react';
import PropTypes from 'prop-types';
import Transaction from './Transaction';
import styles from './TransactionHistory.module.css';

const defaultTitle4 = '';

const TransactionHistory = ({ title, props }) => (
  <div className={styles.transactionHistory}>
    <h2 className="title">{title}</h2>
    <table className={styles.transaction_history}>
      <thead className={styles.table_header}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody className={styles.table_body}>
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

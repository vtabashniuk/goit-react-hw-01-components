import React from 'react';
import PropTypes from 'prop-types';

const StatisticItem = ({ label, percentage, styles }) => (
  <>
    <span className={styles.label}>{label}</span>
    <span className={styles.percentage}>{percentage}%</span>
  </>
);

StatisticItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  styles: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default StatisticItem;

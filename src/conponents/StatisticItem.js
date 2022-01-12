import React from "react";
import PropTypes from "prop-types";

const StatisticItem = ({ label, percentage }) => (
  <>
    <span class="label">{label}</span>
    <span class="percentage">{percentage}%</span>
  </>
);

StatisticItem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
}

export default StatisticItem;

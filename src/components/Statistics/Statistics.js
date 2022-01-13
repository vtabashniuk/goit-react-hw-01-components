import React from "react";
import StatisticItem from "./StatisticItem";
import PropTypes from "prop-types";

const defaultTitle2 = "";

const Statistics = ({ title, props }) => (
  <section class="statistics">
    {title ? <h2 class="title">{title}</h2> : null}
    <ul class="stat-list">
      {props.map(({ id, label, percentage }) => (
        <li class="item" key={id}>
          <StatisticItem label={label} percentage={percentage} />
        </li>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  props: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired }))
    .isRequired,
};

Statistics.defaultProps = {
  title: defaultTitle2,
};

export default Statistics;

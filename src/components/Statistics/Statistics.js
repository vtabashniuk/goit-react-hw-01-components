import React from 'react';
import StatisticItem from './StatisticItem';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const defaultTitle2 = '';

const backgroundColors = {
  '.docx': '#005DA6',
  '.xlsx': '#1D6F42',
  '.mp3': '#5CCAE4',
  '.psd': '#3C327B',
  '.pdf': '#F40F02',
};

const Statistics = ({ title, props }) => (
  <section className={styles.statistics}>
    {title ? <h2 className="title">{title}</h2> : null}
    <ul className={styles.stat_list}>
      {props.map(({ id, label, percentage }) => (
        <li
          className={styles.item}
          key={id}
          style={{ backgroundColor: backgroundColors[label] }}
        >
          <StatisticItem
            label={label}
            percentage={percentage}
            styles={styles}
          />
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

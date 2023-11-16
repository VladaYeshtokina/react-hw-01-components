import PropTypes from 'prop-types';
import css from 'components/Statistics/Statistics.module.css';
import { icon } from '../../utils'



export const Statistics = ({ title, stats }) => {    
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{title}</h2>
      <ul className={css.statList}>
        {stats.map(({ id, label, percentage }, idx) => {
          const currentIcon = icon(idx);
          return (
            <li className={css.item} key={id}>
              {currentIcon}
              {/* <span className={css.label}>{label}</span> */}
              <span className={css.percentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ).isRequired,
};


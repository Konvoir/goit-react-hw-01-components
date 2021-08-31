import s from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({title, stats}) => {
  return (
    <section className={s.statistics}>
    <h2 className={s.title}>{title}</h2>

    <ul className={s.statList}>

  { stats.map(item => (
      <li 
      key={item.id}
      className={s.item}
      // style={{ backgroundColor: color(item) }}
      >

        <span className={s.label}>{item.label}</span>
        <span className={s.percentage}>{item.percentage}%</span>
        </li>
  ))}

   </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.shape.isRequired,
};


export default Statistics;
import styles from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({title, stats}) => {
  return (
    <section class={styles.statistics}>
    <h2 class={styles.title}>{title}</h2>

    <ul class={styles.statList}>

    {/* {stats.map(item => (
          <li key={item.id}
            class={styles.item}
            style={{ backgroundColor: color(item) }}
          >
            <span class={styles.label}>{item.label}</span>
            <span class={styles.percentage}>{item.percentage}%</span>
          </li>
        ))} */}



{ <stats.map(element => (<li class={styles.item}>
        <span class={styles.label}>{stats.label}</span>
        <span class={styles.percentage}>{stats.percentage}%</span>
        </li>

))> 

}
        


        <li class="item">
        <span class="label">.mp3</span>
        <span class="percentage">14%</span>
        </li>
        <li class="item">
        <span class="label">.pdf</span>
        <span class="percentage">41%</span>
        </li>
        <li class="item">
        <span class="label">.mp4</span>
        <span class="percentage">12%</span>
        </li>
    </ul>
    </section>
  );
};



export default Statistics;
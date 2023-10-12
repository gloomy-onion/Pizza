import React from 'react';
import styles from './Filters.module.scss';

const Filters = () => {
  return (
    <div className={styles.categories}>
      <ul>
        <li>Все</li>
        <li>Мясные</li>
        <li>Вегетарианская</li>
        <li>Гриль</li>
        <li>Острые</li>
        <li>Закрытые</li>
      </ul>
    </div>
  );
};

export default Filters;
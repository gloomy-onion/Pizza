import React from 'react';
import sortLabel from './../img/sortLabel.svg';
import styles from './Sort.module.scss';

const Sort = () => {
  return (
    <div className={styles.sort}>
      <div className={styles.sort__label}>
        <div className={styles.sortLabel}> </div>
        <b>Сортировка по: </b>
      </div>
      <div className={styles.sort__popup}>
        <ul>
          <li>популярности</li>
          <li>цене</li>
          <li>алфавиту</li>
        </ul>
      </div>
    </div>
  );
};

export default Sort;
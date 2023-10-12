import React from 'react';
import PizzaBlock from '../PizzaBlock/PizzaBlock';
import styles from './MainContent.module.scss';


const MainContent = () => {
  return (
    <div>
      <h2 className={styles.content__title}>Все пиццы</h2>
      <div className={styles.content__items}>
        <PizzaBlock/>
        <PizzaBlock/>
        <PizzaBlock/>
        <PizzaBlock/>
        <PizzaBlock/>
        <PizzaBlock/>
      </div>
    </div>
  );
};
export default MainContent;
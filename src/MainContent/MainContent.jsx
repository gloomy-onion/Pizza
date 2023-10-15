import React from 'react';
import PizzaBlock from '../PizzaBlock/PizzaBlock';
import styles from './MainContent.module.scss';
import pizzas from './../assets/pizzas.json';

const MainContent = () => {
  return (
    <div>
      <h2 className={styles.content__title}>Все пиццы</h2>
      <div className={styles.content__items}>
        {pizzas.map((pizza) => (
          <PizzaBlock
            {...pizza}
          />
        ))}
      </div>
    </div>
  );
};
export default MainContent;
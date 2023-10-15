import React from 'react';
import PizzaBlock from '../PizzaBlock/PizzaBlock';
import styles from './MainContent.module.scss';


const MainContent = () => {
  return (
    <div>
      <h2 className={styles.content__title}>Все пиццы</h2>
      <div className={styles.content__items}>
        <PizzaBlock title={'Чизбургер'} price={556}/>
        <PizzaBlock title={'Чизбургер'} price={556}/>
        <PizzaBlock title={'Чизбургер'} price={556}/>
        <PizzaBlock title={'Чизбургер'} price={556}/>
        <PizzaBlock title={'Маргарита'} price={322}/>
        <PizzaBlock title={'Чизбургер'} price={556}/>
      </div>
    </div>
  );
};
export default MainContent;
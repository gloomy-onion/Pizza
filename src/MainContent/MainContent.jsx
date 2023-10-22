import React, {useEffect, useState} from 'react';
import PizzaBlock from '../PizzaBlock/PizzaBlock';
import styles from './MainContent.module.scss';
import {Skeleton} from '../PizzaBlock/Skeleton';
import Filters from '../Filters/Filters';
import Sort from '../Sort/Sort';

const MainContent = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://64c7f223a1fe0128fbd57bb6.mockapi.io/pizza').then(res => {
      return res.json();
    }).then((arr) => {
      setItems(arr);
      setIsLoading(false);
    });
  }, []);

  return (
    <div>
      <div className={styles.content__top}>
        <Filters/>
        <Sort/>
      </div>
      <div className={styles.content}>
        <h2 className={styles.content__title}>Все пиццы</h2>
        <div className={styles.content__items}>
          {isLoading
            ? [...new Array(6)].map((_, index) => <Skeleton key={index}/>)
            : items.map((pizza) => (
              <PizzaBlock
                key={pizza.title}
                {...pizza}
              />
            ))
          }
        </div>

      </div>
    </div>
  );
};

export default MainContent;
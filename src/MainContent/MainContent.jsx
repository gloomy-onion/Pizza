import React, {useEffect, useState} from 'react';
import PizzaBlock from '../PizzaBlock/PizzaBlock';
import styles from './MainContent.module.scss';

const MainContent = () => {
  const [items, setItems] = useState([]);


  useEffect(() => {
    fetch('https://64c7f223a1fe0128fbd57bb6.mockapi.io/pizza').then(res => {
      return res.json();
    }).then((arr) => {
      setItems(arr);
    });
  }, [])
  ;

  return (
    <div>
      <h2 className={styles.content__title}>Все пиццы</h2>
      <div className={styles.content__items}>
        {items.map((pizza) => (
          <PizzaBlock
            key={pizza.title}
            {...pizza}
          />
        ))}
      </div>
    </div>
  );
};
export default MainContent;
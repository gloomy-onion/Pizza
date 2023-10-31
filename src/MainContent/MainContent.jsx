import React, {useEffect, useState} from 'react';
import PizzaBlock from '../PizzaBlock/PizzaBlock';
import styles from './MainContent.module.scss';
import {Skeleton} from '../PizzaBlock/Skeleton';
import Filters from '../Filters/Filters';
import Sort from '../Sort/Sort';
import {API_URL} from '../common/constants';

const MainContent = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [sortType, setSortType] = useState({name: 'популярности', sortProperty: 'rating'});


  useEffect(() => {
    setIsLoading(true);
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const sortBy = sortType.sortProperty.replace('-', '');
    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
    fetch(`${API_URL}pizza?
    ${category}&sortBy=${sortBy}&order=${order} `).then(res => {
      return res.json();
    }).then((arr) => {
      setItems(arr);
      setIsLoading(false);
    });
  }, [categoryId, sortType]);

  return (
    <div>
      <div className={styles.content__top}>
        <Filters value={categoryId} onClickCategory={(id) => setCategoryId(id)}/>
        <Sort sortType={sortType} onChangeSort={(i) => setSortType(i)}/>
      </div>
      <div className={styles.content}>
        <h2 className={styles.content__title}>Все пиццы</h2>
        <div className={styles.content__items}>
          {isLoading
            ? (<Skeleton/>)
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
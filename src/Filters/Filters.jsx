import React, {useState} from 'react';
import styles from './Filters.module.scss';


const Filters = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const onClickFilter = (index) => {
    setActiveIndex(index);
  };
  const categories = [
    'Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'
  ];

  return (
    <div className={styles.categories}>
      <ul>
        {
          categories.map((value, i) => (
            <li key={i} onClick={() => onClickFilter(i)} className={activeIndex === i ? styles.active : ''}>{value}</li>
          ))
        }
        </ul>
    </div>
  );
};

export default Filters;
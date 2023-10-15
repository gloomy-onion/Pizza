import React, {useState} from 'react';
import styles from './Sort.module.scss';
import {logDOM} from '@testing-library/react';

const Sort = () => {
  const [open, setOpen] = useState(false);
  const list = ['популярности', 'цене', 'алфавиту'];
  const [selected, setSelected] = useState(0);
  const onClickList = (i) => {
    setSelected(i);
    setOpen(false);
  };
  const sortName = list[selected];

  return (
    <div className={styles.sort}>
      <div className={styles.sort__label}>
        <div className={styles.sortLabel}/>
        <b>Сортировка по: </b>
        <span onClick={() => setOpen(!open)}>{sortName}</span>
      </div>
      {open && <div className={styles.sort__popup}>
        <ul>
          {list.map((name, i) => (
            <li key={name} onClick={()=>onClickList(i)}
                className={selected === i ? styles.active : ''}>{name}</li>
          ))}
        </ul>
      </div>}
    </div>
  );
};

export default Sort;
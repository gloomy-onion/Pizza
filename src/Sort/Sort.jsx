import React, {useState} from 'react';
import styles from './Sort.module.scss';

const Sort = (props) => {
  const {value, onChangeSort} = props;

  const [open, setOpen] = useState(false);
  const list = [
    {name: 'популярности ↓', sortProperty: 'rating'},
    {name: 'популярности ↑', sortProperty: '-rating'},
    {name: 'цене ↓', sortProperty: 'price'},
    {name: 'цене ↑', sortProperty: '-price'},
    {name: 'алфавиту ↓', sortProperty: 'title'},
    {name: 'алфавиту ↑', sortProperty: '-title'}];
  const onClickList = (i) => {
    onChangeSort(i);
    setOpen(false);
  };

  return (
    <div className={styles.sort}>
      <div className={styles.sort__label}>
        <div className={styles.sortLabel}/>
        <b>Сортировка по: </b>
        <span onClick={() => setOpen(!open)}>{value.name}</span>
      </div>
      {open && <div className={styles.sort__popup}>
        <ul>
          {list.map((obj, i) => (
            <li key={i} onClick={() => onClickList(obj)}
                className={value.sortProperty === obj.sortProperty ? styles.active : ''}>{obj.name}</li>
          ))}
        </ul>
      </div>}
    </div>
  );
};

export default Sort;
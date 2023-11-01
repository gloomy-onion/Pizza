import React from 'react';
import styles from './Search.module.scss';
import searchIcon from './../img/searchIcon.svg';

const Search = (props) => {
  const {searchValue, setSearchValue} = props;

  return (
    <div className={styles.root}>
      <img src={searchIcon} className={styles.icon} alt={'Search Icon'}/>
      <input value={searchValue} onChange={(event) => setSearchValue(event.target.value)}
             placeholder={'Поиск пиццы...'}/>
      {searchValue && (<button onClick={() => setSearchValue('')} className={styles.clearBtn}/>)}
    </div>
  );
};

export default Search;
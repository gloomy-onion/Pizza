import './App.module.scss';
import Header from './Header/Header';
import Filters from './Filters/Filters';
import MainContent from './MainContent/MainContent';
import Sort from './Sort/Sort';
import styles from './App.module.scss';

function App() {
  return (
    <div>
      <body>
      <div className={styles.wrapper}>
        <Header/>
        <div className={styles.content}>
          <div className={styles.content__top}>
            <Filters/>
            <Sort/>
          </div>
          <MainContent/>
        </div>
      </div>
      </body>
    </div>
  );
}

export default App;

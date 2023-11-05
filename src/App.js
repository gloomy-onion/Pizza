import './App.module.scss';
import Header from './Header/Header';
import styles from './App.module.scss';
import Home from './pages/Home';
import {Route, Routes} from 'react-router-dom';
import NotFound from './pages/NotFound';
import CartPage from './pages/CartPage';
import {useState} from 'react';

function App() {
  const [searchValue, setSearchValue] = useState('')
  return (
    <body>
    <div className={styles.wrapper}>
      <Header searchValue={searchValue} setSearchValue={setSearchValue}/>
      <Routes>
        <Route path='/' element={<Home searchValue={searchValue}/>}/>
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>

    </div>
    </body>
  );
}

export default App;

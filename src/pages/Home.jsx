import React from 'react';
import MainContent from '../MainContent/MainContent';

const Home = ({searchValue}) => {
  return (
    <div>
      <MainContent searchValue={searchValue}/>
    </div>
  );
};

export default Home;
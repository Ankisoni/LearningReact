import React from 'react';
import Card from './Card';
import CardList from './CardList';

function App() {
  const cards = require('../constants/cardData.json');
  return (
    <div className="App">
      <div className='container'>
        <br></br>
        <div className='row'>
      <CardList cards={cards}/>
      </div>
      </div>
    </div>
  );
}

export default App;

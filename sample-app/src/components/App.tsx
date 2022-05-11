import React from 'react';
import Card from './Card';
import CardList from './CardList';


function App() {

  const cards =[
    {
      header:"Header 1",
      title: "Title 1",
      text:"With supporting text below as a natural lead-in to additional content.",
      image:"https://picsum.photos/200/100"
    },
    {
      header:"Header 2",
      title: "Title 2",
      text:"With supporting text below as a natural lead-in to additional content.",
      image:"https://picsum.photos/200/100"
    },
    {
      header:"Header 3",
      title: "Title 3",
      text:"With supporting text below as a natural lead-in to additional content.",
      image:"https://picsum.photos/200/100"
    },
    {
      header:"Header 4",
      title: "Title 4",
      text:"With supporting text below as a natural lead-in to additional content.",
      image:"https://picsum.photos/200/100"
    }
  ]
  



  return (
    <div className="App">
      <div className='container'>
        <br></br>
      <CardList cards={cards}/>
      </div>
    </div>
  );
}

export default App;

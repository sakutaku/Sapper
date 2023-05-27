import React from 'react';
import './App.css';

const App = () => {

  const createMainTable = () => {
    type Game = {
      hasItem: boolean,
      clicked: boolean,
    };

    let arr: Game[] =[];

    for(let i = 0; i < 36; i++) {
      arr.push({
        hasItem: false,
        clicked: false,
      });
    }

    const randomElOfArr = Math.floor(Math.random() * arr.length);
    arr[randomElOfArr] = {hasItem: true, clicked: false};
    console.log(arr[randomElOfArr]);
  };

  createMainTable();

  return (
    <div className="App">

    </div>
  );
}

export default App;

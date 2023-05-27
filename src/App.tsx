import React, {useState} from 'react';
import Cell from "./Cell/Cell";
import './App.css';

const App = () => {

  const createMainTable = () => {
    let arr: Game[] =[];

    type Game = {
      hasItem: boolean,
      clicked: boolean,
    };

    for(let i = 0; i < 36; i++) {
      arr.push({
        hasItem: false,
        clicked: false,
      });
    }

    const randomElOfArr = Math.floor(Math.random() * arr.length);
    arr[randomElOfArr] = {hasItem: true, clicked: false};

    return arr;
  };

  const [items, setItems] = useState(createMainTable());

  const onCellClick = () => {

    console.log('clicked');
  };

  const listOfCells = items.map(item => {
    return (
        <Cell onCellClick={onCellClick} hiddenEl="g"/>
    );
  });

  console.log(listOfCells);

  return (
    <div className="App">
      <div className="container">
        <div className="wrapper">
          {listOfCells}
        </div>
      </div>

    </div>
  );
}

export default App;

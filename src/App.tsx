import React, {useState} from 'react';
import './App.css';
import Board from "./Board/Board";
import ResetButton from "./ResetButton/ResetButton";

const App = () => {
  const createMainTable = () => {
    let arr: Game[] =[];

    for(let i = 0; i < 36; i++) {
      arr.push({
        hasItem: false,
        clicked: false,
        id: i,
        class: 'cell',
      });
    }

    const randomElOfArr = Math.floor(Math.random() * arr.length);
    arr[randomElOfArr].hasItem = true;

    return arr;
  };

  const [items, setItems] = useState(createMainTable());
  const [tries, setTries] = useState({
    onetry: 0,
  });

  const changeTry = () => {
    const triesCopy = {...tries};
    triesCopy.onetry++;

    setTries(triesCopy);
  };

  const onCellClick = (id: number) => {

    const itemsCopy = [...items];

    if(itemsCopy[id].clicked === false){
      changeTry();
    }
      itemsCopy.forEach(item => {
      if(item.id === id) {

        item.class = 'cell-open';
        item.clicked = true;
      }
    });

    setItems(itemsCopy);
  };

  const createDesk = () => {
    return <Board items={items} onCellClick={onCellClick}/>
  };

  const resetGame = () => {
    const triesCopy = {...tries};
    triesCopy.onetry = 0;

    const itemsCopy = [...items];
    itemsCopy.forEach(item => {
      item.class = 'cell';
    });

    setItems(itemsCopy);
    setTries(triesCopy);
  };

  return (
    <div className="App">
          {createDesk()}
        <div>Tries{tries.onetry}
          <ResetButton onClick={resetGame}/>
        </div>
    </div>
  );
}

export default App;

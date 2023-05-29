import React from 'react';
import Cell from "../Cell/Cell";
import '../App.css';

interface IBoard {
    items: Game[],
    onCellClick: (id: number) => void;
}

const Board: React.FC<IBoard> = ({items, onCellClick}) => {

    const listOfCells = items.map(item => {
        return (
            <Cell className={item.class} onCellClick={() => onCellClick(item.id)} item={item}/>
        );
    });

    return (
        <div className="wrapper">
            {listOfCells}
        </div>
    );
};

export default Board;
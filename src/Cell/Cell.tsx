import React from "react";


interface ICell {
    hiddenEl: string;
    onCellClick: React.MouseEventHandler;
}

const Cell: React.FC<ICell> = ({hiddenEl, onCellClick}) => {
    return(
        <div className="cell" onClick={onCellClick}>{hiddenEl}</div>
    );
};

export default Cell;
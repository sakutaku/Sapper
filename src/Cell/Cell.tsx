import React from "react";


interface ICell {
    onCellClick: React.MouseEventHandler;
    className: string,
    item: Game;
}

const Cell: React.FC<ICell> = ({onCellClick, className, item}) => {

    if (item.hasItem === true) {
        return (<span className={className} onClick={onCellClick}>{0} </span>)
    }

    return(
        <span className={className} onClick={onCellClick}>{} </span>
    );
};

export default Cell;
import React from 'react';

interface IResetButton {
    onClick: React.MouseEventHandler;
}
const ResetButton: React.FC<IResetButton> = ({onClick}) => {
    return (
        <button onClick={onClick}>Reset</button>
    );
};

export default ResetButton;
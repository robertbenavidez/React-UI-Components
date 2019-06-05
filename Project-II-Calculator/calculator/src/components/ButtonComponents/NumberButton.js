import React from 'react';
import './Button.css';

const NumberButton = () => {
    const buttons = ['clear', '7', '8','9', '4', '5', '6', '1', '2', '3', '0'];
    return (
        <div className= 'button-container'>
            {buttons.map(buttonFromMap => (
                <Button buttonOnProps={buttonFromMap} />
            ))}
        </div>
    );
};

const Button = props => {
    return <h1 className="button">{props.buttonOnProps}</h1>;
};

export default NumberButton;
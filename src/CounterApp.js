import React, {useState} from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value = 0}) => {

    const [counter, setCounter] = useState(value);
    const [reset, setReset] = useState(value);

    // handleAdd

    const handleAdd = () => {
        setCounter(counter + 1);
    };

    // handleReset

    const handReset = () => {
        setCounter(reset);
    };

    // handleSustract

    const handleSustract = () => {
        setCounter(counter - 1);
    };

    return (
        <>
            <h1>Counter App</h1>
            <h2>{counter}</h2>
            <button onClick={() => handleAdd()}>Add +1</button>
            <button onClick={() => handReset()}>Reset</button> 
            <button onClick={() => handleSustract()}>Sustract -1</button>
        </>
    );
};

CounterApp.propTypes = {
    value: PropTypes.number
};

export default CounterApp;
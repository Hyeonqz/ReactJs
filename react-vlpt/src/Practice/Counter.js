import React, {useState} from "react";

function Counter() {
    const [number, setNumber] = useState(0);
    const onIncrease = () => {
        setNumber(preNumber => preNumber + 1);
    }
    const onDecrease = () => {
        setNumber(PreNumber => PreNumber - 1);
    }

    return (
        <div>
            <h1>{number}</h1>
            <button type='button' onClick={onIncrease}>+1</button>
            <button type='button' onClick={onDecrease}>-1</button>
        </div>
    );
}

export default Counter;

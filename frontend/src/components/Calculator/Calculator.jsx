import React, { useState } from 'react'



const Calculator = () => {
    const [calc, setCalc] = useState('');
    const [result, setResult] = useState('');

    const operators = ['/', '*', '+', '-'];

    const update = (value) => {
        if (operators.includes(value) && calc === '' || operators.includes(value) && operators.includes(calc.slice(-1))) {
            return;
        }

        setCalc(calc + value);

        if (!operators.includes(value)) {
            setResult(eval(calc + value).toString());
        }
    }
    const calculate = () => {
        setCalc(eval(calc).toString());
    }
    const deleteLast = () => {
        setCalc('');
        setResult('');
    }

    return (
        <div id='calculator'>
            <div className="calculator-grid">
                <div className="display">
                    <div className="current-operand">{calc || "0"}</div>
                </div>
                <div className="buttons">
                    <button onClick={() => update('7'.toString())}>7</button>
                    <button onClick={() => update('8'.toString())}>8</button>
                    <button onClick={() => update('9'.toString())}>9</button>
                    <button onClick={() => update('+')}>+</button>
                    <button onClick={() => update('4'.toString())}>4</button>
                    <button onClick={() => update('5'.toString())}>5</button>
                    <button onClick={() => update('6'.toString())}>6</button>
                    <button onClick={() => update('-')}>-</button>
                    <button onClick={() => update('1'.toString())}>1</button>
                    <button onClick={() => update('2'.toString())}>2</button>
                    <button onClick={() => update('3'.toString())}>3</button>
                    <button onClick={() => update('*')}>*</button>
                    <button onClick={() => deleteLast()}>C</button>
                    <button onClick={() => update('0'.toString())}>0</button>
                    <button onClick={() => calculate()}>=</button>
                    <button onClick={() => update('/')}>/</button>
                </div>
            </div>

        </div >
    )
}

export default Calculator
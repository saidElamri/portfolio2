import React, { useState } from 'react';
import useSound, { sounds } from '../../hooks/useSound';

const Calculator = () => {
    const [display, setDisplay] = useState('0');
    const [operator, setOperator] = useState(null);
    const [prevValue, setPrevValue] = useState(null);
    const [newNumber, setNewNumber] = useState(true);

    const playClick = useSound(sounds.click, 0.5);

    const handleNum = (num) => {
        playClick();
        if (newNumber) {
            setDisplay(num.toString());
            setNewNumber(false);
        } else {
            setDisplay(display === '0' ? num.toString() : display + num);
        }
    };

    const handleOp = (op) => {
        playClick();
        setOperator(op);
        setPrevValue(parseFloat(display));
        setNewNumber(true);
    };

    const calculate = () => {
        playClick();
        if (operator && prevValue !== null) {
            const current = parseFloat(display);
            let result = 0;
            switch (operator) {
                case '+': result = prevValue + current; break;
                case '-': result = prevValue - current; break;
                case '×': result = prevValue * current; break;
                case '÷': result = prevValue / current; break;
                default: return;
            }
            setDisplay(result.toString());
            setPrevValue(null);
            setOperator(null);
            setNewNumber(true);
        }
    };

    const clear = () => {
        playClick();
        setDisplay('0');
        setOperator(null);
        setPrevValue(null);
        setNewNumber(true);
    };

    const btnClass = "h-12 rounded-full font-bold text-lg transition-all active:scale-95 flex items-center justify-center";

    return (
        <div className="h-full flex flex-col bg-black p-4 select-none">
            <div className="flex-1 flex items-end justify-end text-5xl font-light text-white mb-4 px-2 break-all">
                {display}
            </div>
            <div className="grid grid-cols-4 gap-3">
                <button onClick={clear} className={`${btnClass} bg-neutral-400 text-black col-span-3`}>AC</button>
                <button onClick={() => handleOp('÷')} className={`${btnClass} bg-orange-500 text-white`}>÷</button>

                <button onClick={() => handleNum(7)} className={`${btnClass} bg-neutral-800 text-white`}>7</button>
                <button onClick={() => handleNum(8)} className={`${btnClass} bg-neutral-800 text-white`}>8</button>
                <button onClick={() => handleNum(9)} className={`${btnClass} bg-neutral-800 text-white`}>9</button>
                <button onClick={() => handleOp('×')} className={`${btnClass} bg-orange-500 text-white`}>×</button>

                <button onClick={() => handleNum(4)} className={`${btnClass} bg-neutral-800 text-white`}>4</button>
                <button onClick={() => handleNum(5)} className={`${btnClass} bg-neutral-800 text-white`}>5</button>
                <button onClick={() => handleNum(6)} className={`${btnClass} bg-neutral-800 text-white`}>6</button>
                <button onClick={() => handleOp('-')} className={`${btnClass} bg-orange-500 text-white`}>-</button>

                <button onClick={() => handleNum(1)} className={`${btnClass} bg-neutral-800 text-white`}>1</button>
                <button onClick={() => handleNum(2)} className={`${btnClass} bg-neutral-800 text-white`}>2</button>
                <button onClick={() => handleNum(3)} className={`${btnClass} bg-neutral-800 text-white`}>3</button>
                <button onClick={() => handleOp('+')} className={`${btnClass} bg-orange-500 text-white`}>+</button>

                <button onClick={() => handleNum(0)} className={`${btnClass} bg-neutral-800 text-white col-span-2`}>0</button>
                <button onClick={() => handleNum('.')} className={`${btnClass} bg-neutral-800 text-white`}>.</button>
                <button onClick={calculate} className={`${btnClass} bg-orange-500 text-white`}>=</button>
            </div>
        </div>
    );
};

export default Calculator;

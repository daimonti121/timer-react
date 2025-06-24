// import { useState, useEffect, useRef } from 'react';
import { useState, useRef } from 'react';
import './App.css';

function App() {
    const [count, setCount] = useState(0);
    const [buttonName, setButtonName] = useState('Start');
    // const [buttonChackStateName, setButtonChackStateName] = useState(true);
    const timeId = useRef(null);

    const onStartTimer = () => {
        if (buttonName == 'Start') {            
            timeId.current = setInterval(() => {
                setCount((countPrev) => countPrev + 1);
                const counterLocal = count;
                localStorage.setItem('count', counterLocal);
            }, 1000);
            setButtonName('Stop');
        } else {
            clearInterval(timeId.current);
            setButtonName('Start');
        }
    };

    const onResetTimer = () => {
        setCount(0);
        clearInterval(timeId.current);
        timeId.current = null;
        setButtonName('Start');
    };

    return (
        <div>
            <h2>React timer</h2>
            <p className='counter'>{count}</p>

            <button className='buttonClass' onClick={onStartTimer}>
                {buttonName}
            </button>
            <button className='buttonClass' onClick={onResetTimer}>
                Reset
            </button>
        </div>
    );
}

export default App;

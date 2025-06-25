import { useState, useRef, useEffect } from 'react';
import './App.css';

export default function App() {
    const [count, setCount] = useState(() => {
        const saved = localStorage.getItem('timer');
        return saved ? +saved : 0;
    });

    const [isName, setButtonName] = useState(true);
    const timerIdRef = useRef(null);

    const onStartTimer = () => {
        if (isName) {
            timerIdRef.current = setInterval(() => {
                setCount((countPrev) => countPrev + 1);
            }, 1000);
            setButtonName(false);
        } else {
            clearInterval(timerIdRef.current);
            setButtonName(true);
        }
    };

    useEffect(() => {
        localStorage.setItem('timer', count);
    }, [count]);

    const onResetTimer = () => {
        setCount(0);
        clearInterval(timerIdRef.current);
        timerIdRef.current = null;
        setButtonName(true);
    };

    return (
        <div>
            <h2>React timer</h2>
            <p className='counter'>{count}</p>

            <button className='buttonClass' onClick={onStartTimer}>
                {isName ? 'start' : 'stop'}
            </button>
            <button className='buttonClass' onClick={onResetTimer}>
                Reset
            </button>
        </div>
    );
}

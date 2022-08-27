import React, {useState, useEffect} from 'react';

function Timer() {
    const [time, setTime] = useState(0);
    const [laps, setLaps] = useState([]);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        if (isRunning) {
            const timeoutId = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);

            return () => {
                clearTimeout(timeoutId);
            };
        }

    }, [isRunning]);

    const lap = () => {
        setLaps((prevLaps) => [...prevLaps, time]);
    };

    const stop = () => {
        setIsRunning(false);
    };
    const reset = () => {
        setTime(0);
        setLaps([]);
        setIsRunning(false);
    };
    const start = () => {
        setIsRunning(true);
    };

    return (
        <div>
            <h2>Time: {time}s</h2>
            <button onClick={lap}>Lap</button>
            <button onClick={stop}>Stop</button>
            <button onClick={reset}>Reset</button>
            <button onClick={start}>Start</button>

            <ul>
                {laps.map((lap, index) => (
                    <li key={index}>{lap}</li>
                ))}
            </ul>
        </div>
    );
};

export default Timer
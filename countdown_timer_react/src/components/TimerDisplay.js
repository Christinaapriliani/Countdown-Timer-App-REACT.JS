import React, { useEffect, useState } from 'react';

function TimerDisplay({ timer }) {
    const [timeLeft, setTimeLeft] = useState(timer);

    useEffect(() => {
        const interval = setInterval(() => {
            if (timeLeft > 0) {
                setTimeLeft(timeLeft - 1);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [timeLeft]);

    const formatTime = seconds => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };

    return (
        <div>
            <h2>Countdown Timer</h2>
            <p>{formatTime(timeLeft)}</p>
        </div>
    );
}

export default TimerDisplay;

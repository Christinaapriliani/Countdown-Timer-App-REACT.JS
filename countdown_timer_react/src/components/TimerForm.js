import React, { useState } from 'react';

function TimerForm({ setTimer }) {
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const handleSubmit = e => {
        e.preventDefault();
        const totalSeconds = minutes * 60 + seconds;
        setTimer(totalSeconds);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Minutes:</label>
                <input
                    type="number"
                    value={minutes}
                    onChange={e => setMinutes(e.target.value)}
                />
            </div>
            <div>
                <label>Seconds:</label>
                <input
                    type="number"
                    value={seconds}
                    onChange={e => setSeconds(e.target.value)}
                />
            </div>
            <button type="submit">Start</button>
        </form>
    );
}

export default TimerForm;

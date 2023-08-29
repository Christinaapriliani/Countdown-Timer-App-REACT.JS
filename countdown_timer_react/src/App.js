import React, { useState } from 'react';
import TimerForm from './components/TimerForm';
import TimerDisplay from './components/TimerDisplay';

function App() {
    const [timer, setTimer] = useState(0);

    return (
        <div>
            <h1>Countdown Timer App</h1>
            <TimerForm setTimer={setTimer} />
            {timer > 0 && <TimerDisplay timer={timer} />}
        </div>
    );
}

export default App;

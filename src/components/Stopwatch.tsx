import React, { useState, useEffect } from 'react';

const Stopwatch: React.FC = () => {
  const [running, setRunning] = useState<boolean>(false);
  const [elapsedTime, setElapsedTime] = useState<number>(0);

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;

    if (running) {
      interval = setInterval(() => {
        setElapsedTime((prevElapsedTime) => prevElapsedTime + 1000);
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [running]);

  const handleStart = () => {
    setRunning(true);
  };

  const handleStop = () => {
    setRunning(false);
  };

  const handleReset = () => {
    setRunning(false);
    setElapsedTime(0);
  };

  const seconds = Math.floor(elapsedTime / 1000);

  return (
    <div className="stopwatch">
      <h2>Stopwatch</h2>
      <div className="stopwatch-time">{seconds}</div>
      {running ? (
        <button onClick={handleStop}>Stop</button>
      ) : (
        <button onClick={handleStart}>Start</button>
      )}
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Stopwatch;

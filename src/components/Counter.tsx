import { platform } from 'os';
import React from 'react'


interface CounterProps {
 
  score: number;
}


const Counter:React.FC<CounterProps> = ({score}:CounterProps) => {
  return (
    <div className="counter">
        <button >-</button>
      <div className="counter-score">{score}</div>
        <button >+</button>
    </div>
  )
}

export default Counter
import { platform } from 'os';
import React from 'react'


interface CounterProps {
 
  score: number;
 
}


const Counter:React.FC<CounterProps> = ({score}:CounterProps) => {
  return (
    <div className="counter">
        <button className="counter-action decrement">-</button>
      <div className="counter-score">{score}</div>
        <button className="counter-action increment" >+</button>
    </div>
  )
}

export default Counter
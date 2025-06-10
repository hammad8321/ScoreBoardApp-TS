import { platform } from 'os';
import React from 'react'


interface CounterProps {
 
  score: number;
   onChange: (delta: number) => void;
 
}


const Counter:React.FC<CounterProps> = ({score , onChange}:CounterProps) => {
  return (
    <div className="counter">
        <button className="counter-action decrement"  onClick={() => onChange(-1)}>-</button>
      <div className="counter-score">{score}</div>
        <button className="counter-action increment" onClick={() => onChange(+1)} >+</button>
    </div>
  )
}

export default Counter
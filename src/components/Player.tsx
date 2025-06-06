import React from 'react'
import Counter from './Counter'

interface PlayerProps {
  name: string;
  score: number;
}

const Player = ({name , score }:PlayerProps) => {
  return (
    <div className="player">
    <div className="player-name">
      <a className="remove-player" >✖</a>
        {/* <button className="save-button" onClick={()=>{}}>💾</button> */}
   
      {name}
    </div>
         <div className="player-score">
      <Counter score={score} />
    </div>
        
        
    </div>



  )
}

export default Player
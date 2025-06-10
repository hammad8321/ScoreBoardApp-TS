import React from 'react'
import Counter from './Counter'

interface PlayerProps {
 id : number
  name: string;
  score: number;
  onScoreChange: (delta: number) => void;
    OnRemovePlayer: (id: number)=>void
}

const Player: React.FC<PlayerProps>= ({ id, name , score, onScoreChange ,  OnRemovePlayer }:PlayerProps) => {
  return (
    <div className="player">
    <div className="player-name">
      <a className="remove-player" onClick={()=>OnRemovePlayer(id)}>✖</a>
        {/* <a className="save-button" onClick={()=>{}}>💾</a> */}
   
      {name}
    </div>
         <div className="player-score">
      <Counter score={score}  onChange={onScoreChange} />
    </div>
        
        
    </div>



  )
}

export default Player
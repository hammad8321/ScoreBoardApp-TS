import React, { useState } from 'react'
import { PlayerType } from '../types/player';
import Player from './Player';


const INITIAL_PLAYERS: PlayerType[] = [
  { name: "Player A", score: 11 },
  { name: "Player B", score: 30 },
  { name: "Player C", score: 50 },
];

const Scoreboard = () => {
    const [players , setPlayers] =useState<PlayerType[]>(INITIAL_PLAYERS)
  return (
    <div className="scoreboard">
        {players.map((player)=>{
            return(
                <div className="players">

                    <Player
                        name ={player.name}
                        score = {player.score}
                        />
                    
                    
                </div>

           

            )
        
    
          
        }
            

             

        
    )}

    </div>
 
)
  
}

export default Scoreboard
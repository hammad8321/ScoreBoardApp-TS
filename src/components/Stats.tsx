import React from 'react'
import { PlayerType } from '../types/player';


interface StatsProps {
     playerState: PlayerType[];
  
}


const Stats : React.FC<StatsProps>= ({playerState}) => {
    const totalPlayers = playerState.length;
  const totalPoints = playerState.reduce((sum, player) => sum + player.score, 0);

  return (
     <table className="stats">
      <tbody>
        <tr>
          <td>Players:</td>
          <td>{totalPlayers}</td>
        </tr>
        <tr>
          <td>Total Points:</td>
          <td>{totalPoints}</td>
        </tr>
      </tbody>
      

    </table>
  )
}

export default Stats
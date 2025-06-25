import React from "react";
import { PlayerType } from "../types/player";
import Stopwatch from "./Stopwatch";
import Stats from "./Stats";

interface HeaderProps {
  playerState: PlayerType[];
}

const Header: React.FC<HeaderProps> = ({ playerState }) => {
  const totalPlayers = playerState.length;
  const totalPoints = playerState.reduce((total, player) => total + player.score, 0);

  return (
   
<div className="header">
   <div className="header-left">
 <Stats   playerState={playerState} />
   
</div>
    
    <div className="header-center">
    <div >
          ScoreBoard     
    </div>

    </div>
    <div className="header-right">
     
      <Stopwatch />
      </div>
    
  </div>
  );
};

export default Header;
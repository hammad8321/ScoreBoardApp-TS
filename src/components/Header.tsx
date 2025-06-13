import React from "react";
import { PlayerType } from "../types/player";
import Stopwatch from "./Stopwatch";

interface HeaderProps {
  playerState: PlayerType[];
}

const Header: React.FC<HeaderProps> = ({ playerState }) => {
  const totalPlayers = playerState.length;
  const totalPoints = playerState.reduce((total, player) => total + player.score, 0);

  return (
    // <header className="header">
    //   <p className="stats">Players: {totalPlayers}</p>
    //   <p className="stats">Total Points: {totalPoints}</p>
         
    //   <h1 className="header-title">Scoreboard</h1>
  
      
    //    
    // </header>
<div className="header">
     {/* <table className="stats">
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
      

    </table> */}
    <div className="stats">

    
    <div className="header-title">
      ScoreBoard 
    </div>
    <div className="stopwatch">
      <Stopwatch />
      </div>
      </div>
  </div>
  );
};

export default Header;
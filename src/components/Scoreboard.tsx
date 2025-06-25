import React, { useState ,useEffect } from "react";
import { PlayerType } from "../types/player";
import Player from "./Player";
import Header from "./Header";
import AddPlayerForm from "./AddPlayerForm";
import * as api                from '../services/api';

/**
 * Initial list of players with default scores.
 */

// const INITIAL_PLAYERS: PlayerType[] = [
//   {id:1,  name: "Player A", score: 11 },
//   {id:2, name: "Player B", score: 30 },
//   {id:3, name: "Player C", score: 50 },
// ];

// 🧠 This function is passed to AddPlayerForm
/**
 * Scoreboard component manages the list of players and their scores.
 * It allows adding new players via the AddPlayerForm component.
 *
 * @component
 * @returns JSX.Element - The scoreboard UI including players and add player form.
 */
const Scoreboard: React.FC = () => {
  // State to hold the current list of players
  const [playerState, setPlayers] = useState<PlayerType[]>([]);
  // State to hold the current input value for new player name
  const [name, setName] = useState("");

  /**
   * Handles the form submission to add a new player.
   * Prevents default form submission behavior.
   * Validates the player name input to ensure it's not empty or whitespace only.
   * If valid, adds a new player with a starting score of 0 to the playerState array.
   * Resets the name input field to an empty string after adding.
   * Otherwise, shows an alert to prompt the user for valid input.
   *
   * @param e - React form event from submission
   */
 // 1️⃣ Load players on mount

//  fetch('https://localhost:44378/api/Players')
//   .then(res => res.json())
//   .then(data => console.log(data))
//   .catch(err => console.error('Fetch failed:', err));
  useEffect(() => {
    api.fetchPlayers()
   

      .then(res => {console.log("Fetched players:", res.data);
        setPlayers(res.data);})
      .catch(err => {
      console.error("API error:", err);
    });
     
  }, []);


  function handleAddPlayer(e:React.FormEvent<HTMLFormElement>){

     e.preventDefault();
      if (!name.trim()) return alert('Please enter valid name');
       api.addPlayer({ name: name.trim(), score: 0 })
      .then(res => {
        setPlayers(prev => [...prev, res.data]);
        setName('');
      })
      .catch(console.error);


      
 

  }

// 3️⃣ Change score and persist
  const handleScoreChange = (index: number, delta: number) => {
    const player = playerState[index];
    const updated: PlayerType = { ...player, score: player.score + delta };

    api.updatePlayer(updated)
      .then(() => {
        setPlayers(prev => {
          const copy = [...prev];
          copy[index] = updated;
          return copy;
        });
      })
       .catch(err => {
      console.error("Failed to update score", err);
      alert("Error updating score");
    });
  };

  // 4️⃣ Remove player
  const handleRemovePlayer = (id: number) => {
    api.deletePlayer(id)
      .then(() => {
        setPlayers(prev => prev.filter(p => p.id !== id));
      })
      .catch(console.error);
  };

  return (
    <div className="scoreboard">
      <Header playerState={playerState} />

      {/* Render list of Player components for each player */}
      <div className="players">
        {playerState.map((x, i) => {
          return (
            <Player
            id={x.id}
              key={i}
              name={x.name}
              score={x.score}
            OnRemovePlayer={()=>handleRemovePlayer(x.id)}
              onScoreChange={(delta) => handleScoreChange(i, delta)}
            />
          );
        })}
      </div>
      {/* Form component for adding a new player */}
      <AddPlayerForm name={name} setName={setName} onAdd={(e)=>handleAddPlayer(e)} />
    </div>
  );
};

export default Scoreboard;

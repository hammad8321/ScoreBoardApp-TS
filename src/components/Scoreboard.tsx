import React, { useState } from "react";
import { PlayerType } from "../types/player";
import Player from "./Player";
import Header from "./Header";
import AddPlayerForm from "./AddPlayerForm";

/**
 * Initial list of players with default scores.
 */

const INITIAL_PLAYERS: PlayerType[] = [
  {id:1,  name: "Player A", score: 11 },
  {id:2, name: "Player B", score: 30 },
  {id:3, name: "Player C", score: 50 },
];

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
  const [playerState, setPlayers] = useState<PlayerType[]>(INITIAL_PLAYERS);
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



  function handleAddPlayer(e:React.FormEvent<HTMLFormElement>){

     e.preventDefault();
    if(name.trim()){
      const newPlayer :PlayerType ={
        id: Date.now(),
        name : name.trim(),
        score:0
      };
      setPlayers([... playerState,newPlayer])
      setName("")
    }else{
      alert("Please enter valid value")
    }

  }

  // const handleAddPlayer = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   if (name.trim()) {
  //     const newPlayer: PlayerType = {
  //       id: Date.now(),
  //       name: name.trim(),
  //       score: 0,
  //     };

  //     // Update players list with the new player added

  //     setPlayers([...playerState, newPlayer]);
  //     // Clear input field for next entry
  //     setName("");
  //   } else {
  //     alert("Enter valid player name");
  //   }
  // };

  const handleScoreChange = (index: number, delta: number) => {
    setPlayers((prevPlayers) => {
      const updatedPlayers = [...prevPlayers]; // copy array
      updatedPlayers[index].score += delta; // update score
      return updatedPlayers; // set new state
    });
  };

  function handleRemovePlayer (id: number ){
    setPlayers(playerState.filter(x=>x.id !== id))
  }
  // const handleRemovePlayer=(id: number )=>{

  //    setPlayers(playerState.filter(player => player.id !== id));
  // }
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

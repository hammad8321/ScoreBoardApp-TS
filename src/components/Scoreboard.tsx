import React, { useState } from "react";
import { PlayerType } from "../types/player";
import Player from "./Player";
import Header from "./Header";
import AddPlayerForm from "./AddPlayerForm";

const INITIAL_PLAYERS: PlayerType[] = [
  { name: "Player A", score: 11 },
  { name: "Player B", score: 30 },
  { name: "Player C", score: 50 },
];

 // 🧠 This function is passed to AddPlayerForm

const Scoreboard = () => {
  const [playerState, setPlayers] = useState<PlayerType[]>(INITIAL_PLAYERS);

    const handleAddPlayer = ( name: string) => {
      if (name  ===  '') return
      
      setPlayers([...playerState, { name, score: 0 }]);
    };




  return (
    <div className="scoreboard">
      {/* <Header players={players} /> */}
      <div className="players">
        {playerState.map((x, i) => {
          return <Player key={i} name={x.name} score={x.score} />;
        })}
      </div>
      <AddPlayerForm

      onAdd={handleAddPlayer}
      />
    </div>
  );
};

export default Scoreboard;

/*/
//   const handleAdd = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (product && description) {
//       setProducto([
//         ...producto,
//         { id: Date.now(), product, description, isDone: false },
//       ]);
//       setProduct("");
//       setDescription("");
//       console.log(producto);
//     } else {
//       alert("Enter Valid Data");
//     }
// //   };



*/

import { useState } from "react";
import Board from "./Components/Board"
import PlayerInfo from "./Components/PlayerInfo"
import ActionPanel from "./Components/ActionPanel"
import Valuetraker from "./Components/Valuetracker"
import Dice from "./Components/Dice";

function App() {
    const [player, setPlayer] = useState({
    name: "Player1",
    position: 0,
    gold: 0,
    credit: 0,
    seed: 0,
    ore: 0,
  });

  const [dice, setDice] = useState(1);
  function handleRoll() {
  const randomNum = Math.floor(Math.random() * 6) + 1;

  setDice(randomNum);

  setPlayer((prev) => ({
    ...prev,
    position: (prev.position + randomNum) % 12,
  }));
}
  return (
    <>
   <div
   className="min-h-screen bg-black flex justify-center items-center relative">
    <div
    className="w-full max-w-7xl space-y-6">
      <Valuetraker/>
      <Board player={player} />
      <Dice dice={dice} handleRoll={handleRoll} />
      <ActionPanel/>
      <PlayerInfo player={player}/>
    </div>
   </div>
  </>
  );

}

export default App;

import { useState } from "react";
import Board,{spaces} from "./Components/Board"
import PlayerInfo from "./Components/PlayerInfo"
import ActionPanel from "./Components/ActionPanel"
import Valuetraker from "./Components/Valuetracker"
import Dice from "./Components/Dice";
import { refineryRates } from "./game/refinery";

function App() {
  const [numberOfPlayers, setNumberOfPlayers] = useState(2);

  const [dice, setDice] = useState(1);
  
  const [players, setPlayers] = useState([
  {
    id: 1,
    name: "Player 1",
    position: 0,
    gold: 0,
    credits: 0,
    seeds: 0,
    ore: 0,
  },
  {
    id: 2,
    name: "Player 2",
    position: 0,
    gold: 0,
    credits: 0,
    seeds: 0,
    ore: 0,
  },
]);
  // tell about whose turn 
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);

  // who is currently playing
  const currentPlayer = players[currentPlayerIndex];
// dice 
  const rollDice = () => {
    console.group ("Roll Dice Debug");
   try {
    //validate the current player 
    if(
    !players||
    currentPlayerIndex<0||
    currentPlayerIndex>= players.length
    ){
      console.error ("InvalidcurrentPlayerIndex:");
      return;
    }
   


  const diceValue = Math.floor(Math.random() * 6) + 1;
  console.log ("Dice Value:", diceValue);
  console.log ("Current Player:", currentPlayer.name);
  console.log ("Before Position:", currentPlayer.position);

  setDice(diceValue);
  setPlayers((prevPlayers) => {
    const updatedPlayers = [...prevPlayers];

    const player = updatedPlayers[currentPlayerIndex];

    const newPosition =
      (player.position + diceValue) % 12;

    player.position = newPosition;

    const landedSpace = spaces[newPosition];

    console.log ("Expected Position:", newPosition);
    console.log("Landed Space:", landedSpace);

    //validate the board space 
    if (landedSpace === undefined){
      console.error (" NO Board Space Found at :", newPosition);
      return;
    }

    if (landedSpace === "Mine") {
      player.ore += 2;
    }
    console.log ("to:",newPosition);
    console.log ("Space:",landedSpace);


    return updatedPlayers;
   });
 console.log ("Movement Calculation Completed");
 console.log ("Player:",currentPlayer.name);
 console.log ("From:",currentPlayer.position);

   }catch(error) {
    console.error ("Error inside roll dice:", error);
   }
   finally {
    console .groupEnd();
   }

};
//refine logic
const convertOre = (type) => {

    if (!canRefine) return;

    const rate = refineryRates[type];

    if (!rate) return;

    setPlayers((prevPlayers) => {

      const updatedPlayers = [...prevPlayers];

      const player = updatedPlayers[currentPlayerIndex];

      if (player.ore < rate.oreCost) {
        return prevPlayers;
        // if ore is less than cost then it will not convert 
      }

      player.ore -= rate.oreCost;
      // if we borrow then cut the cost

      player[type] += rate.reward;

      return updatedPlayers;
    });
  };
// one player's turn is end
const endTurn = () => {
  setCurrentPlayerIndex(
    (prevIndex) => (prevIndex + 1) % players.length
  );
};
  
  return (
    <>
   <div
   className="min-h-screen bg-black flex justify-center items-center relative">
    <div
    className="w-full max-w-7xl space-y-6">
      <Valuetraker/>
      <Board players={players} />
      <Dice dice={dice} handleRoll={rollDice} />
      <ActionPanel 
       endTurn={endTurn}
      />
      {players.map((player) => (
       <PlayerInfo
       key={player.id}
       player={player}
       />
      )
      )}
    </div>
   </div>
  </>
  );
}


export default App;

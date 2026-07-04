import { useState } from "react"

function Dice (){
 const [dice,setDice] = useState(1);

const dicefaces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

function Roll (){
  const RandomNum = Math.floor (Math.random()*6)+1;
  setDice(RandomNum)
}

// dice
return (
  <div  className="min-h-screen flex flex-col items-center justify-center bg-gray-900">
     <h2 className="text-8xl bg-white w-32 h-32 rounded-xl flex items-center justify-center shadow-lg">{dicefaces[dice - 1]}</h2>
     <button onClick={Roll}
           className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">

        Roll Dice
      </button>
  </div>
);
  
}
export default Dice;

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
  <div  className="flex flex-col items-center justify-center">
     <h2 className="text-5xl bg-white w-10 h-8  rounded-lg flex items-center justify-center shadow-lg bottom-0 left-0 inset-y-0">{dicefaces[dice - 1]}</h2>
     <button onClick={Roll}
           className=" px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">

        Roll Dice
      </button>
  </div>
);
  
}
export default Dice;

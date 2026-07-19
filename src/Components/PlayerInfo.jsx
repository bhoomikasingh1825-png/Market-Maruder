import { useState } from "react";

function PlayerInfo (){
const [Player,setPlayer] = useState ({
  name : 'Player1',
  position : '0',
  gold :'0',
  credit :'0',
  seed :'0',
  ore :'0',
});
function handleRoll (){
  const dice = Math.floor(Math.random()*6)+1;
  setPlayer((Prev) =>({
    ...Prev,
    position : (Prev.position + dice)% 12,
  }));
}
return(
<div className="w-full rounded-xl border border-blue-900 bg-[#171427]
p-4 shadow-lg">
  <h2 className="mb-4 flex items-center gap-2 text-sm font-bold uppercase text-violet-300">
  👤 Player Info
</h2>
<div className="mb-3 flex items-center justify-between rounded-lg bg-[#26213c] px-4 py-3">
  <div className="flex items-center gap-2">

<span className="text-2xl">👤</span>

<p className="font-semibold text-white">
Player1
</p>
<div className="flex gap-8">
  <p className="text-yellow-400">
🪙 Gold 2
</p>

<p className="text-blue-400">
💳 Credits 5
</p>

<p className="text-green-400">
🌱 Seeds 1
</p>
</div>
</div>
</div>


</div>

);
}
export default PlayerInfo;

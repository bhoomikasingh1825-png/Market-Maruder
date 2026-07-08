import Dice from "./Dice"

function ActionPanel (){
  return(
    <div 
    className="w-full bg-slate-900 rounded-2xl p-1 flex items-center justify-between">
      <Dice/>
    </div>
  );
}
export default ActionPanel

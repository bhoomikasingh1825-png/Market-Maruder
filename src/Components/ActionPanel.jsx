function ActionPanel ({endTurn}){
  return(
    <div 
    className="w-full bg-slate-900 rounded-2xl p-1 flex items-center justify-between">
      <button onClick={endTurn}
       className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3 rounded-xl shadow-lg transition-all duration-200 hover:scale-105"
      >End Turn</button>
    </div>
  );
}
export default ActionPanel

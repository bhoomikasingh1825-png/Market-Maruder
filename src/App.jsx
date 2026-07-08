import Board from "./Components/Board"
import PlayerInfo from "./Components/PlayerInfo"
import ActionPanel from "./Components/ActionPanel"
import Valuetraker from "./Components/Valuetracker"
function App() {
  return (
    <>
   <div
   className="min-h-screen bg-black flex justify-center items-center relative">
    <div
    className="w-full max-w-7xl space-y-6">
      <Valuetraker/>
      <Board/>
      <ActionPanel/>
      <PlayerInfo/>
    </div>
   </div>
  </>
  );

}

export default App;

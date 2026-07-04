import Board from "./Components/Board"
import Dice from "./Components/Dice"
import MarketTraker from "./Components/MarketTraker"
import ActionPanel from "./Components/ActionPanel"

function App() {
 
  return (
    <>
    <div  className="min-h-screen bg-black flex items-center justify-center">
      <Board/>
      <Dice/>
      </div>
    </>
  )
}

export default App

const spaces = [
  "Mine",
  "Market",
  "Refinery",
  "Mine",
  "Market",
  "Refinery",
  "Mine",
  "Market",
  "Refinery",
  "Mine",
  "Market",
  "Refinery",]
  
function Board(){
  const radius = 230
  return(
    <div
     className="relative mx-auto rounded-full"
     style={{ width: '600px', height: '6oopx'}} >
      { spaces.map ((space, index) => {
      
        const angle = ( index / spaces.length)*2* Math.PI

        const x = 170* Math.cos(angle)

       const y = 170* Math.sin(angle) 

      return(
        <div
        key={index}
        className="absolute w-20 h-20 bg-yellow-400 rounded-xl flex items-center justify-center font-bold shadow-lg "
        style={{
          left :`calc(50% + ${x}px)`,
          top :`calc(50% + ${y}px)`,
          transform : "translate(-50%, -50%)",
        }}
        >
          {space}
        </div> 
      )
    })
      }
    </div>
  )

}
export default Board
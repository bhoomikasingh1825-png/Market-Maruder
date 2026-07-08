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
   const xRadius = 320;
  const yRadius = 180;

  const radius = 150;
  return(
    <div
     className="relative rounded-3xl 
     bg-linear-to-b from-slate-900 to blue-950 border border-blue-500/40 shadow-2xl shadow-blue-500/40
     p-8 "

      style={{ width: '900px', height: '500px'}} >
      { spaces.map ((space, index) => {
      
        const angle = ( index / spaces.length)*2* Math.PI

        const x = xRadius* Math.cos(angle)

       const y = yRadius* Math.sin(angle) 

      return(
        <div
        key={index}
        className="absolute w-20 h-20 text-amber-50 bg-slate-900 border border-cyan-500
        p-8 shadow-2xl rounded-xl flex items-center justify-center font-bold  "
        style={{
          left :`calc(50% + ${x}px)`,
          top :`calc(50% + ${y}px)`,
          transform:'translate(-50%,-50%)'
          
        }}
        >
          {space}
        </div> 
      );
      
    })
      }
    </div>

  );

}
export default Board
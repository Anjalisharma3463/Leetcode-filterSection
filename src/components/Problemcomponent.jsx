import React from "react";
 
const Problem = ({ index, id,title , difficulty}) => {
    
    const bgcolor = (index%2) == 0 ? "bg-[#434343]" : "bg-[#343434]";
 
 const color = difficulty === "Easy" ? "text-green-400" : difficulty === "Medium" ? "text-yellow-400" : "text-red-400";
  return (
      <>
       <div className={ ` p-2 text-white w-150 h-10 ${bgcolor} rounded flex justify-between`}>
         <div className="flex">

          <img src="/right.svg" alt="right icon" className="w-6 h-6"/>
          <span>{`${id}.`}</span>
          <span>{title}</span> 
       </div>

       <div>
          <span className={color}>{difficulty}</span>
       </div>
         </div>
      </>
  )
}
export default Problem;
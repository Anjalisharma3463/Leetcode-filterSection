import React from "react";
 import rightimage from "../images/right.svg"; 
const Problem = ({ index, id,title , difficulty}) => {
    
    const bgcolor = (index%2) == 0 ? "bg-[#434343]" : "bg-[#343434]";
 
 const color = difficulty === "Easy" ? "text-green-400" : difficulty === "Medium" ? "text-yellow-400" : "text-red-400";
  return (
      <>
       <div className={ ` px-2 text-white    h-14   sm:h-10 ${bgcolor} rounded flex justify-between items-center`}>
         <div className="flex   ">
          <div>

          <img src={rightimage} alt="right icon" className="w-4 h-4 sm:w-6 h-6"/>
          </div>
          <div className="text-xs  ">

          <span  >{`${id}.`}</span>
          <span  >{title}</span> 
          </div>
       </div>
 
          <span className={`${color} pl-2 text-xs `}>{difficulty}</span>
        
         </div>
      </>
  )
}
export default Problem;
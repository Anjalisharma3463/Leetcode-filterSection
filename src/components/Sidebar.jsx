import React, { useState } from "react";
import { Star, Lock ,Menu } from 'lucide-react';
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={` fixed  top-0 left-0 h-screen w-64 bg-[#333333] text-white shadow-lg transform  transition-transform duration-500
           ${isOpen ? "translate-x-0" : "-translate-x-64"
          }`}
      >

        <div className="p-4 flex justify-between items-center">
          <span className="text-lg font-bold">My Lists</span>
          <button onClick={toggleSidebar}>
             <Menu size={20} />
            {/* <img src="/hamburger.svg" alt="close" className="w-6 h-6 filter invert" /> */}
          </button>

        </div>


        <div className="p-4">
          <p className="text-gray-300">Created by me</p>
          <div className="mt-4 p-2 flex justify-between items-center bg-[#434343] rounded">
            <div className="flex items-center">
              <div className="w-6 h-6 bg-white rounded flex justify-center items-center">

              <Star color='yellow' size={60} fill="yellow" strokeWidth={0} />
              </div>
              <div>

                <p className="pl-2">Favourite</p>
              </div>
            </div>
            {/* <img src="/lock.svg" alt="lock icon" className="w-5 h-5 filter invert" /> */}
             <Lock   size={20}  /> 
          </div>
        </div>
      </div>




      <button
        onClick={toggleSidebar}
        className={`fixed sticky top-4 left-4 transition-opacity duration-500 ${isOpen ? "opacity-0 invisible" : "opacity-100 visible delay-500"
          }`}
      >
        {/* <img src="/hamburger.svg" alt="menu" className="w-6 h-6 filter invert " /> */}
        <Menu size={20} color="white"/>
      </button>

 </>
  );
};

export default Sidebar;

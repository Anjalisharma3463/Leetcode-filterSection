import React from "react";
import Sidebar from "./components/Sidebar";
import ProfileSection from "./components/Profile";
// import FilteredSection from "./components/FilteredSection";
import FilteredSection from "./components/FilteredSection";
function App() {


  return (
    <>
 
      <div className='flex flex-row w-full h-auto bg-[#1a1a1a]     justify-between'>
        <div>

          <Sidebar />
        </div>
        <div className='flex p-10   '>

          <div  >

            <ProfileSection />
          </div>

          <div className=' ml-10      '>

            <FilteredSection />
          </div>

        </div>

      </div>
    </>
  )
}

export default App

import React from "react";
import Sidebar from "./components/Sidebar";
import ProfileSection from "./components/Profile";
// import FilteredSection from "./components/FilteredSection";
import FilteredSection from "./components/FilteredSection";
import leetcode from "./images/leetcode.svg";
function App() {

  // 1025 - 1600 laptop deskop
  // 768 - 1024 tablet
  // 320 - 480 mobile

  // sm - w >= 640px
  // md - w >= 768px
  // lg - w >= 1024px



  // xl - w >= 1280px
  // 2xl - w >= 1536px
  return (
    <>
      <div className="w-screen bg-[#1a1a1a]  min-h-screen  ">

        {/* sidebar  on mobile */}
        <div className="flex sticky top-0 block md:hidden px-2 bg-[#434343] w-screen h-15 justify-between  items-center">
           
        <div>

            <Sidebar />
        </div>
            
          <img src={leetcode} alt="" className="w-6 h-6 filter  invert" />
        </div>



        <div className="md:flex  md:justify-between p-4">

          <div className="hidden md:block">
            <Sidebar />
          </div>

           <div className="md:flex    ">
            
          <ProfileSection />
          <FilteredSection />
           </div>
        </div>
      </div>



    </>
  )


}

export default App




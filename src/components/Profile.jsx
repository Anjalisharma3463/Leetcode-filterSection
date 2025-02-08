import React, { useEffect, useState } from 'react';
 import { Statusbox } from './Statusbox';
const Progressbar = () => {
  return (

    <>


      {/* <!-- Circular Progress --> */}  
      <div className="relative size-20    ">
        <svg className="size-full -rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
          {/* <!-- Background Circle --> */}
          <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-gray-200" strokeWidth="2"></circle>
          {/* <!-- Progress Circle --> */}
          <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-blue-600" strokeWidth="2" stroke-dasharray="100" stroke-dashoffset="65" strokeLinecap="round"></circle>
        </svg>

        {/* <!-- Percentage Text --> */}
        <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
          <span className="text-center text-2xl font-bold text-blue-600">35%</span>
        </div>
      </div>
      {/* <!-- End Circular Progress --> */}
    </>
  );
}

 


export default function ProfileSection() {
  

 

  return (
    <>

      <div className='p-10 bg-[#333333] text-white rounded-lg shadow-lg md:h-150     '>

        {/* up content */}
          <div>
            {/* image  */}
          <div  className="w-25 h-25  bg-white rounded flex justify-center items-center">

          <img src="/favourite.svg" alt="" className=' pb-4 w-20  h-20' />
          </div>

           
          <h2 className="text-2xl font-semibold">Favorite</h2>
          <p className="text-gray-400  flex     pt-4 "> <span>Sumana · 19 questions ·</span>  <span> 🔒 Private</span></p>

          {/* Practice Button */}
          <button className="mt-4 mb-5 p-2 bg-white flex justify-center rounded items-center text-black font-medium">
           <img src="/play.svg" alt=""  className='w-5 h-5'/>
           <span className='pl-1'>Practice</span>
          </button>
          <hr />


        </div>
        {/* middlecontent */}
        <div className='mt-3  '>
          <h1>Progress</h1>

        </div>



        {/* downcontnet */}
        <div className='flex mx-auto  '>


          {/* left */}
          <div className='bg-[#434343] mt-3 w-full  h-52  rounded-lg shadow-lg flex justify-center items-center'>
            <Progressbar />

          </div>
          {/* right */}
          <div >
            
               <Statusbox status={'easy'} problems={'11'}/>
               <Statusbox status={'medium'} problems={'7'}/>
               <Statusbox status={'hard'} problems={'1'}/>
          </div>
        </div>


      </div>





    </>
  );
}
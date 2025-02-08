import React, { useEffect, useState } from 'react';
import Problemcomponent from './Problemcomponent';
import {Filter , RotateCcw} from 'lucide-react'
import problemdatajson from '../Data/problemdata.json';
const FilteredSection = () => {
    const [clicked, setClicked] = useState(false); // State variable to track filter  modelvisibility
    const [filtereddata, setFilteredData] = useState([]); // State variable to store filtered data
    const [selectedFilter, setSelectedFilter] = useState([]); // State variable to store selected filters
    const [problemData, setProblemData] = useState(problemdatajson); // State variable to store problem data
     
 
    
    

    useEffect(() => {
        const filteredData = problemData.filter((item) => {
            if (selectedFilter.length === 0) {
                return true;             }
    
      
            const selectedStatuses = selectedFilter.filter(f => ["Todo", "Solved", "Attempted"].includes(f));
            const selectedDifficulties = selectedFilter.filter(f => ["Easy", "Medium", "Hard"].includes(f));
  
            return (selectedStatuses.length === 0 || selectedStatuses.includes(item.status)) &&
                   (selectedDifficulties.length === 0 || selectedDifficulties.includes(item.difficulty));
        });
    
        setFilteredData(filteredData);
    }, [selectedFilter, problemData]);


    const handleCheckboxChange = (value) => {
        setSelectedFilter((prev) =>
            prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
        );
        console.log("selected value", value);


    };
    
  

    const toggle = () => {
        setClicked(!clicked); // Toggle the filter visibility
    };

    const Reset = () => {
    setSelectedFilter([]); // Reset the selected filters
    
    }
    return (
        <>
             {/* parent div  for yellow and red*/}
            <div  className='  mt-10 md:ml-10 md:mr-15  md:w-[400px]    '>


                {/* filter button  line */}
                <div className=' p-2   '>
                    <div>
                        <button
                            onClick={toggle}
                            className="rounded-xl flex items-center p-2  bg-white   font-semibold"
                        >
                             <Filter size={20} fill='black'/>
                            {/* <img src="/filter.svg" alt="filter icon" className="w-5  " /> */}
                            <span className="px-3 text-base">Filter</span>
                        </button>
                    </div>

                    {/* filter model */}
                    {/* selection of filter model on top of filtered data . it must be absolutie or fixed . it will come on top of filtered data whenver clicked will be true  */}
                    {clicked &&
                         
                        <div className=" font-medium   w-[320Px] text-white flex flex-col absolute  h-70 bg-[#434343] rounded">
                            {/* first status  */}
                            <div className=" p-2">
                                <h1 className='pl-4'>Status</h1>

                                <div className='flex pt-2 '>


                                    <div className='flex px-3'>
                                        <input
                                            type="checkbox"
                                            value="Todo"
                                            checked={selectedFilter.includes("Todo")}
                                            onChange={(e) => handleCheckboxChange(e.target.value)}
                                             className="appearance-none w-5 h-5 bg-[#434343] rounded-md border border-gray-500 checked:bg-blue-500 checked:border-blue-700"
                                        />
                                        <span className='pl-1'>Todo</span>

                                    </div>

                                    <div className='flex pl-4'>
                                        <input
                                            type="checkbox"
                                            value="Attempted"
                                            checked={selectedFilter.includes("Attempted")}
                                            onChange={(e) => handleCheckboxChange(e.target.value)}
                                             className="appearance-none w-5 h-5 bg-[#434343] rounded-md border border-gray-500 checked:bg-blue-500 checked:border-blue-700"
                                        />
                                        <span className='pl-1'>Attempted</span>

                                    </div>

                                    <div className='flex pl-4'>
                                        <input
                                            type="checkbox"
                                            value="Solved"
                                            checked={selectedFilter.includes("Solved")}
                                            onChange={(e) => handleCheckboxChange(e.target.value)}
                                             className="appearance-none w-5 h-5 bg-[#434343] rounded-md border border-gray-500 checked:bg-blue-500 checked:border-blue-700"
                                        />
                                        <span className='pl-1'>Solved</span>

                                    </div>
                                </div>
                            </div>

                            {/* second status  */}
                            <div className=" p-2">
                               
                                <h1 className='pl-4'>Difficulty</h1>

                                <div className='flex pt-2 '>


                                    <div className='pl-4 flex'>
                                        <input
                                            type="checkbox"
                                            value="Easy"
                                            checked={selectedFilter.includes("Easy")}
                                            onChange={(e) => handleCheckboxChange(e.target.value)}
                                             className="appearance-none w-5 h-5 bg-[#434343] rounded-md border border-gray-500 checked:bg-blue-500 checked:border-blue-700"
                                        />
                                        <span className='pl-1 text-green-500'>Easy</span>

                                    </div>

                                    <div className='pl-4 flex'>
                                        <input
                                            type="checkbox"
                                            value="Medium"
                                            checked={selectedFilter.includes("Medium")}
                                            onChange={(e) => handleCheckboxChange(e.target.value)}
                                             className="appearance-none w-5 h-5 bg-[#434343] rounded-md border border-gray-500 checked:bg-blue-500 checked:border-blue-700"
                                        />
                                        <span className='pl-1 text-yellow-500'>Medium</span>

                                    </div>

                                    <div className='flex pl-4'>
                                        <input
                                            type="checkbox"
                                            value="Hard"
                                            checked={selectedFilter.includes("Hard")}
                                            onChange={(e) => handleCheckboxChange(e.target.value)}
                                             className="appearance-none w-5 h-5 bg-[#434343] rounded-md border border-gray-500 checked:bg-blue-500 checked:border-blue-700"
                                        />
                                        <span className='pl-1 text-red-500'>Hard</span>

                                    </div>
                                </div>
                            </div>


                            {/* third  butttone    */}
                            <div className="mx-12">
                                <button onClick={Reset} className="bg-[#383838] py-2  px-auto rounded-lg h-10 w-45 mt-5 flex justify-center">
                                    {/* <img src="/reset.svg" alt="" className="w-6 h-6 filter invert pr-2" /> */}
                                 < RotateCcw size={20}/>
                                    <span>Reset</span>
                                </button>
                            </div>
                        </div>
                    }
 

                </div>



                {/* filtered Data RED */}
               
                      <div className='p-2 flex flex-col   '>

                      {
                         
                          filtereddata.map((item, index) => {
                              return (
                                <>
                                   <Problemcomponent   index={index}  id={item.id} title={item.title} difficulty={item.difficulty} />
                                </>
                            );
                        })
                    }
                    </div>
             
            </div>
        </>
      
);
};

export default FilteredSection;

 
// In the FilteredSection component:

// There will be a button labeled "Filter", which has a useState variable to track its state (default is false).
// Clicking the button will open a Filter Selection Modal, which contains three checkboxes.
// Users can select any combination of these checkboxes and click "Apply" to filter the data accordingly.
// If no checkbox is selected, the default 10 problems will be displayed.
// The displayed data (both the full list and the filtered results) will come from problemData.js.




// npm i lucid icon /
// react-particles


//   job juntion 
// 2 portfolio
// ai
// api testing tool 
// whishpershield
// chat generator 



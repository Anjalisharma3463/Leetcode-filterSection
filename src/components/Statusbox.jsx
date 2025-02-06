import React from 'react';

export const Statusbox = ({ status , problems }) => {
   const statusColor = status === 'easy' ? 'text-green-400' : status === 'medium' ? 'text-yellow-400' : 'text-red-400';
   

  return (
    <div className='flex-col text-center bg-[#434343] mt-3 rounded w-24 h-15 ml-3 p-2'>
      <p className={statusColor}>{status}</p>
      <p>{`${problems}/${problems}`}</p>
    </div>
  );
};

 
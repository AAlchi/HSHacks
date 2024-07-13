import React from 'react'
import StatBoxes from './StatBoxes'

const Summary = () => {
  return (
    <div className='text-white text-start flex lg:gap-4 gap-10 lg:p-20 py-10 justify-evenly lg:flex-row flex-col items-center bg-gradient-to-r from-indigo-600 via-blue-800 to-indigo-900'>
       <div className='flex flex-col text-center lg:text-start gap-3 w-3/5'>
        <h1 className='font-extrabold text-4xl'>What is HSHacks?</h1>
        <p className='text-lg lg:w-3/5 flex items-start'>HSHacks is a 12-hour, in-person hackathon where you can chill, code, and get prizes! You can team up (max 5) or go solo to solve a theme-related problem!</p>
       </div>
       <div className='flex flex-col gap-1 lg:w-2/5 w-11/12'>
        <StatBoxes icon="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" text="120+ expected participants" />
        <StatBoxes icon="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" text="12 hour hackathon" />
        <StatBoxes icon="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" text="$42000+ total giveaways + prizes" /> 
       </div>
    </div>
  )
}

export default Summary  
import React from 'react' 
import Pictures from './Pictures' 
import StatBoxes from './StatBoxes'

const Summary = () => {
  const nums = ["one", "two", "three", "four", "five", "six"]
  return (
    <div className='flex bg-gradient-to-b from-indigo-600 via-blue-800 to-indigo-900 justify-center'>
    <div className='text-white py-20 flex gap-4 justify-evenly flex-col items-start px-4' style={{maxWidth: "1500px"}}>
      <div>
        <h1 className='font-extrabold text-4xl'>HSHacks 2024</h1>
      </div>
      <div className='grid w-full gap-5 pt-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
        <StatBoxes icon="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" text="120 attendees" />
        <StatBoxes icon="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" text="12 hour hackathon" />
        <StatBoxes icon="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" text="$42000+ total giveaways + prizes" /> 
      </div>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 pt-5 gap-5 w-full'>
        {nums.map(number => (
          <Pictures key={number} link={`/pictures/${number}.jpg`}/>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Summary  
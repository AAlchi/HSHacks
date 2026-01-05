import React from 'react' 
import Pictures from './Pictures' 
import StatBoxes from './StatBoxes'
import Button from '../../global/button/Button' 

const Summary = () => {
  const nums = ["one", "two", "three", "four", "imageFive", "six"]
  return (
    <div className='flex bg-gradient-to-b from-indigo-600 via-blue-800 to-indigo-900 justify-center'>
    <div className='text-white py-20 flex gap-4 justify-evenly flex-col items-start px-4' style={{maxWidth: "1500px"}}>
      <div>
        <h1 className='font-extrabold text-4xl'>Pictures from Our Past Hackathons</h1>
      </div>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 pt-5 gap-5 w-full'>
        {nums.map(number => (
          <Pictures key={number} link={`/pictures/${number}.jpg`}/>
        ))}
      </div>
      <div className='flex flex-col items-center w-full mt-12'>
        <Button name="View the 2025 projects" navigate="https://hshacks-2025.devpost.com/project-gallery" color="bg-white text-black" icon="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/>
      </div>
    </div>
    </div>
  )
}

export default Summary  
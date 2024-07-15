import React, { useState } from 'react'

interface FAQBlockInterface {
  question: string;
  answer: string
}

const FAQBlock: React.FC<FAQBlockInterface> = ({
  question,
  answer
}) => {
  const [isHidden, setIsHidden] = useState(true)
  return (
    <div className='bg-white text-black rounded-lg p-4 lg:w-11/12 w-full'>
      <div onClick={() => setIsHidden(!isHidden)} className='flex items-center justify-between cursor-pointer'>
        <h1 className='text-lg font-extrabold'>{question}</h1>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d={`${isHidden ? "m19.5 8.25-7.5 7.5-7.5-7.5" : "m4.5 15.75 7.5-7.5 7.5 7.5"}`} />
        </svg>
      </div> 

      <div className={`${isHidden ? "hidden" : "flex flex-col"}`}>
        <div className='border-b-2 border-gray-200 pt-2' />
        <p className='pt-2'>{answer}</p>
      </div>
    </div>
  )
}

export default FAQBlock
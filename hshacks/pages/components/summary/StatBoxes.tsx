import React from 'react'

interface StatBoxesInterface {
    text: string;
    icon: string
}

const StatBoxes: React.FC<StatBoxesInterface> = ({
    text,
    icon
}) => {
  return (
    <div className='bg-white text-slate-500 rounded-lg p-4 flex items-center gap-3'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
        </svg> 
        {text}
    </div>
  )
}

export default StatBoxes
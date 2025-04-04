import React from 'react'

interface ScheduleBlockInterface { 
    name: string; 
}

const ScheduleBlock: React.FC<ScheduleBlockInterface> = ({ 
    name
}) => {
    return (
        <div className='w-full flex bg-gradient-to-r from-slate-300 to-white text-black px-5 py-5 rounded-lg gap-4'>
            <div className='flex flex-col'>
            <h1 className='font-semibold text-xl'>{name}</h1> 
            </div>
        </div>
    )
}

export default ScheduleBlock
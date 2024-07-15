import React from 'react'
import Button from '../../global/button/Button'

const HistoryLanding = () => {
    return (
        <div className='text-white h-screen background'>
            <div>
                <div className='text-center flex flex-col gap-10 h-screen items-center justify-center'>
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-6xl font-extrabold'><span className="HSBlue">HSHacks</span> 2024</h1> 
                    </div> 
                </div>
                <div className='absolute w-full bottom-10 text-white flex justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-9 animate-bounce">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default HistoryLanding
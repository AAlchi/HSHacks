import React from 'react'
import Button from '../../global/button/Button'

const HistoryLanding = () => {
    return (  
           <div className='background'>
           <div className='text-white flex h-screen flex-col items-center justify-between gap-10'> 
                   <div className='text-center flex flex-col gap-10 items-center pt-20 justify-center px-4 md:px-8 lg:px-16' style={{minHeight: "750px"}}>
                       <div className='flex flex-col gap-3'>
                       <h1 className='text-6xl font-extrabold'><span className="HSBlue">HSHacks</span> 2024</h1> 

                       </div> 
                   </div>
                   <div className='w-full text-white pb-10 landingFooter flex justify-evenly' style={{opacity: 0.8}}>
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-9 animate-bounce">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
                    </svg>
               </div>
               </div>
           </div>
    )
}

export default HistoryLanding
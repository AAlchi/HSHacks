import React from 'react'
import Button from '../../global/button/Button'

const HistoryLanding = () => {
    return (
        <div className='text-white h-screen background'>
            <div>
                <div className='text-center flex flex-col gap-10 h-screen items-center justify-center'>
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-5xl font-extrabold'>The history of <span className="HSBlue">HSHacks</span></h1> 
                    </div>
                    <div className='flex gap-3 flex-col justify-center'>
                        <Button name="Download HSHacks 2023 Stats" disabled navigate="https://hshacks.org/signup" color="bg-white text-slate-500" icon="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/>
                        <Button name="Download HSHacks 2024 Stats" disabled navigate="https://discord.gg/zMAQhPX9" color="bg-white text-slate-500" icon="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/>
                    </div>
                </div>
                <div className='absolute w-full bottom-0 bg-white text-black flex justify-evenly md:flex-row flex-col'>
                    <h1 className='font-extrabold flex items-center md:gap-2 py-5 whitespace-nowrap'> 
                        Questions? Contact us at team@hshacks.org
                    </h1> 
                </div>
            </div>
        </div>
    )
}

export default HistoryLanding
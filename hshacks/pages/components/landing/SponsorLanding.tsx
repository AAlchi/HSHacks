import React from 'react'
import Button from '../global/button/Button'

const SponsorLanding = () => {
    return (
        <div className='text-white h-screen background'>
            <div>
                <div className='text-center flex flex-col gap-10 h-screen items-center justify-center'>
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-5xl font-extrabold'>Make a Difference to<span className="HSBlue"> HSHacks</span></h1> 
                    </div>
                    <div className='flex gap-3 lg:flex-row flex-col justify-center'>
                        <Button name="Sponsor Us" navigate="https://hshacks.org/signup" color="bg-white text-slate-500" icon="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 8.25.22-.22a.75.75 0 0 1 1.28.53v6.441c0 .472.214.934.64 1.137a3.75 3.75 0 0 0 4.994-1.77c.205-.428-.152-.868-.627-.868h-.507m-6-2.25h7.5M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"/>
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

export default SponsorLanding
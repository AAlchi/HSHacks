"use client"
import React from 'react'
import Button from '../../global/button/Button' 
import gsap from 'gsap'

const Landing = () => { 
    if (typeof document !== 'undefined') { 
        gsap.set(".one", {opacity: 0.2})
        gsap.to(".one", { duration: 3, x: 0, opacity: 1}); 

        gsap.set(".two", {opacity: 0.2})
        gsap.to(".two", { delay: 0.2, duration: 3, x: 0, opacity: 1}); 
    }
    
    return (
        <div className='text-white h-screen background'>
            <div>
                <div className='text-center flex flex-col gap-10 h-screen items-center justify-center'>
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-5xl font-extrabold one'><span className="HSBlue">Code.</span> Win Prizes. <span className="HSBlue">Make a Difference.</span></h1>
                        <p className='text-lg font-bold two px-3'>A 12-hour long hackathon where you can
                            code, make friends, eat, and relax</p>
                    </div>
                    <div className='flex gap-3 lg:flex-row flex-col justify-center'>
                        <Button name="Sign Up is Closed" navigate="https://hshacks.org/signup" disabled color="bg-white text-slate-500" icon="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 8.25.22-.22a.75.75 0 0 1 1.28.53v6.441c0 .472.214.934.64 1.137a3.75 3.75 0 0 0 4.994-1.77c.205-.428-.152-.868-.627-.868h-.507m-6-2.25h7.5M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"/>
                        <Button name="Join the Discord" navigate="https://discord.gg/zMAQhPX9" color="bg-blue-800 text-white" icon="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/>
                    </div>
                </div>
                <div className='absolute w-full bottom-0 bg-white text-black flex justify-evenly md:flex-row flex-col'>
                    <h1 className='font-extrabold flex items-center md:gap-2 py-5 whitespace-nowrap'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 w-1/5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                        To Be Decided
                    </h1>
                    <h1 className='font-extrabold flex items-center md:gap-2 py-5 whitespace-nowrap'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 w-1/5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                        </svg>
                        To Be Decided
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Landing
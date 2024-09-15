"use client"
import React from 'react'
import Button from '../../global/button/Button'
import gsap from 'gsap'

const RegisterationLanding = () => {
    // if (typeof document !== 'undefined') { 
    //     gsap.set(".one", {opacity: 0.2})
    //     gsap.to(".one", { duration: 3, x: 0, opacity: 1}); 

    //     gsap.set(".two", {opacity: 0.2})
    //     gsap.to(".two", { delay: 0.2, duration: 3, x: 0, opacity: 1}); 
    // }

    return (
        <div className='background text-white'>
            <div className='flex flex-col'>
                <div className='text-center flex flex-col gap-10 items-center justify-center pt-10 px-4 md:px-8 lg:px-16' style={{ minHeight: "600px", flex: "2" }}>
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-5xl font-extrabold one'>
                            <span className="HSBlue">HSHacks <span className='text-white'>Registeration</span></span>
                        </h1>
                        <p className='text-lg font-bold two px-3'>
                            Registeration Opens Soon
                        </p>
                    </div>
                </div>
                <div className='w-full bg-white text-black flex justify-evenly md:flex-row flex-col' style={{ opacity: 0.8, flex: "0.03" }}>
                    <a href="https://maps.app.goo.gl/dtdxNxhJKDcw9NjN8" target="_blank" className='font-extrabold flex items-center md:gap-2 py-5 whitespace-nowrap'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 w-1/5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                        Arlington Heights, IL 60004
                    </a>
                    <h1 className='font-extrabold flex items-center md:gap-2 py-5 whitespace-nowrap'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 w-1/5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                        </svg>
                        April 12, 2025
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default RegisterationLanding


import Image from 'next/image';
import React from 'react'

interface SponsorCardInterface {
    name: string;
    description: string;
    website: string;
    color: string
}

const SponsorCard: React.FC<SponsorCardInterface> = ({
    name,
    description,
    website,
    color
}) => {
    return (
        <div className='bg-white text-black rounded-lg w-full'>
            <div className='p-4'>
                <div className='flex justify-between border-b-2 border-gray-200 text-2xl'>
                    <div className='flex gap-3 items-start'>
                        <Image width="100" height="0" style={{ width: "50px" }} src="/temp_map.jpg" alt='image' />
                        <h1 className='font-extrabold pb-2'>{name}</h1>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                    </svg>
                </div>
                <p className='pt-2'>{description}</p>
            </div> 
            {color == "diamond" ? (
                <div className='bg-cyan-600' style={{ height: "10px" }} /> 
            ) : color == "gold" ? (
                <div className='bg-yellow-500' style={{ height: "10px" }} /> 
            ) : (
                <div className='bg-slate-300' style={{ height: "10px" }} /> 
            )}
        </div>
    )
}

export default SponsorCard
import Image from 'next/image'
import React from 'react'

interface ProfileBlockInterface {
    image: string;
    name: string;
    school: string
}

const ProfileBlock: React.FC<ProfileBlockInterface> = ({
    image,
    name,
    school
}) => {
    return (
        <div className='flex items-center gap-4 whitespace-nowrap pb-10'> 
            {image == "default" ? (
                <svg style={{ width: "100px", height: "100px", borderRadius: "50%", boxShadow: "0px 0px 0px 0px white" }} className="bg-slate-500 p-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
            ) : (
                <Image width="100" height="100" style={{ width: "100px", height: "100px", borderRadius: "50%", objectFit: "cover", boxShadow: "0px 0px 0px 0px white" }} src={image} alt="Image" />
            )}
            <div className='flex flex-col'>
            <h1 className='font-bold text-lg pt-2'>{name}</h1>

                <p>{school}</p>
            </div>
        </div>
    )
}

export default ProfileBlock
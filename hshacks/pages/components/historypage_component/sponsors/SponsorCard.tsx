import React from 'react'

interface SponsorCardInterface { 
    image: string;
    description: string;
    website: string;
    color: string
}

const SponsorCard: React.FC<SponsorCardInterface> = ({ 
    image,
    description,
    website,
    color
}) => {
    const relocate = () => {
        window.location.href = website
    }
    return (
        <div className='bg-white text-black rounded-lg w-full justify-between flex flex-col' style={{boxShadow: "0px 0px 5px 1px #d4d5d6"}}>
            <div className='p-4'>
                <div className='flex justify-between border-b-2 border-gray-200 text-2xl'>
                    <div className='flex gap-3 items-start pb-3'>
                        <img width="100" height="0" className="w-full" style={{maxHeight: "45px"}} src={image} alt='image' /> 
                    </div>
                    <svg onClick={relocate} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                    </svg>
                </div>
                <p className='pt-2'>{description}</p>
            </div> 
            <div>
                {color == "platinum" ? (
                    <div className='bg-slate-800' style={{ height: "10px" }} /> 
                ) : color == "gold" ? (
                    <div className='bg-yellow-500' style={{ height: "10px" }} /> 
                ) : (
                    <div className='bg-gray-400' style={{ height: "10px" }} /> 
                )}
            </div>
        </div>
    )
}

export default SponsorCard
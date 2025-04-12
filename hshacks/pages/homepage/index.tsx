import React from 'react'
import Button from '../components/global/button/Button'
import { sponsorsConst } from '../components/homepage_component/sponsors/Sponsors'

const index = () => {
  return (
    <div className='background text-white'>
    <div className='flex flex-col'>
        <div className='text-center flex flex-col gap-10 items-start justify-center pt-10 px-4 md:px-8 lg:px-16' style={{ minHeight: "600px", flex: "2" }}>
            <div className='flex flex-col gap-3 items-start'>
                <h1 className='text-8xl font-extrabold one'>
                    <div
                    >
                        <span className="HSBlue">HSHacks</span> 
                        <span className='pl-3'>2025</span>
                    </div>
                </h1>
                <div
                >
                    <p className='text-lg font-bold two'>
                        Brought to you by
                    </p>
                </div>
            </div>
            <div className='flex gap-3 flex-wrap'>
                {sponsorsConst.map(sponsor => (
                    <div className='bg-white rounded-xl py-3 px-5 text-black flex h-[100px] items-center justify-center'>
                        <img src={sponsor.image} alt={sponsor.color} className='flex w-full object-cover max-h-[70px] items-center justify-center'/>
                    </div>
                ))}
            </div>
        </div>
    </div>
</div>
  )
}

export default index
import React from 'react'
import ProfileBlock from './ProfileBlock'

const Team = () => {
  return (
    <div className='text-white py-10 px-10 justify-center items-center flex-col flex'>
        <div className='items-start flex flex-col w-full'>
            <h1 className='text-3xl font-extrabold pb-3'>Our Team</h1>
            <div className='w-full border-b-2 border-white' style={{ height: "2px" }} />
        </div> 
        <div className='flex lg:w-9/12 gap-10 flex-wrap justify-center pt-10'>
            <ProfileBlock image="/profile/Ali.jpg" name="Ali Alchikh Ibrahim"/>
            <ProfileBlock image="/profile/Matthew.webp" name="Matthew Lundeen"/>
            <ProfileBlock image="default" name="Eric Wetzel"/>
            <ProfileBlock image="default" name="Zuzanna Latosa"/>
            <ProfileBlock image="/profile/Efe.png" name="Efe Ozalp"/>
            <ProfileBlock image="/profile/Albert.jpeg" name="Albert Kim"/>
            <ProfileBlock image="default" name="Richard Fetyko"/> 
        </div>
    </div>
  )
}

export default Team
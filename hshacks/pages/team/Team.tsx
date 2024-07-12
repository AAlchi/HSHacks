import React from 'react'
import ProfileBlock from './ProfileBlock'

const Team = () => {
  return (
    <div className='text-white py-10 px-10'>
      <div className='items-start flex flex-col w-full'>
        <h1 className='text-3xl font-extrabold pb-3'>Our Team</h1>
        <div className='w-full border-b-2 border-white' />
      </div> 
        <div className='grid w-full gap-10 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 items-center justify-center pt-10 p-10'>
          <ProfileBlock image="/profile/Ali.jpg" name="Ali Alchikh Ibrahim" school="John Hersey HS" />
          <ProfileBlock image="/profile/Matthew.webp" name="Matthew Lundeen" school="Prospect HS" />
          <ProfileBlock image="default" name="Eric Wetzel" school="John Hersey HS" />
          <ProfileBlock image="default" name="Zuzanna Latosa" school="John Hersey HS" />
          <ProfileBlock image="/profile/Efe.png" name="Efe Ozalp" school="Prospect HS" />
          <ProfileBlock image="/profile/Albert.jpeg" name="Albert Kim" school="Prospect HS" />
          <ProfileBlock image="default" name="Richard Fetyko" school="John Hersey HS" />
        </div> 
    </div>
  )
}

export default Team